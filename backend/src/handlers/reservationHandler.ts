import type { Context } from "hono";
import { db } from "../utils/db.js";
import { NewError, NewSuccess, type HandlerResult } from "../utils/success.js";
import { ZodError } from "zod";
import { reservationSchemaChecker, zodReservationSchema } from "../utils/reservationSchema.js";
import isIDValid from "../utils/isIdValid.js";
import { ObjectId } from "mongodb";

const reservations = db.collection("reservations");

const getAllReservations = async (c: Context) => {
  try {
    const reservationData = await reservations.find().toArray();
    return reservationData;
  } catch (e) {
    throw `Error: ${e}`;
  }
};

const createReservation = async (c: Context): Promise<HandlerResult> => {
  try {
    await c.req.json();
  } catch (e) {
    return {
      status: 400,
      error: NewError(
        "Request body is invalid, or missing. Must be json request.",
      ),
    };
  }

  try {
    const body = await c.req.json();
    const res = reservationSchemaChecker(body);
    if (res instanceof ZodError) {
      console.error(`Error: ${res.message}`);
      return {
        status: 400,
        error: NewError(
          "Menu item parsing failed, please make sure details are correct",
        ),
      };
    }

    const mongoRes = await reservations.insertOne(res);
    if (!mongoRes.acknowledged) {
      return {
        status: 503,
        error: NewError("Error inserting mongo resource"),
      };
    }

    return {
      status: 201,
      success: NewSuccess("Successfully created resource"),
    };
  } catch (e) {
    console.error(`Error: ${e}`);
    return { status: 500, error: NewError("Server error") };
  }
};

const updateReservation = async (c: Context): Promise<HandlerResult> => {
  try {
    await c.req.json();
  } catch (e) {
    return {
      status: 400,
      error: NewError(
        "Request body is invalid, or missing. Must be json request.",
      ),
    };
  }

  try {
    const updateBody = await c.req.json();
    const reservation_id = isIDValid(c);
    if (!reservation_id) {
      return {
        status: 400,
        error: NewError(
          "Error inputted id is incorrect, should be 24 characters",
        ),
      };
    }

    const res = await reservations.findOne({ _id: reservation_id });
    if (!res) {
      return {
        status: 404,
        error: NewError("No reservation with this id"),
      };
    }

    const resZod = zodReservationSchema.strict().partial().safeParse(updateBody);
    if (!resZod.success) {
      return {
        status: 400,
        error: NewError("Invalid data"),
      };
    }

    await reservations.updateOne({ _id: new ObjectId(reservation_id) }, { $set: updateBody });

    return {
      status: 200,
      success: NewSuccess("Successfully updated menu reservation"),
    };
  } catch (e) {
    console.error(`Error: ${e}`);
    return {
      status: 500,
      error: NewError("Server error"),
    };
  }
};


const deleteReservation = async (c: Context): Promise<HandlerResult> => {
  try {
    const reservation_id = isIDValid(c);
    if (!reservation_id) {
      return {
        status: 400,
        error: NewError(
          "Error inputted id is incorrect, should be 24 characters",
        ),
      };
    }

    const res = await reservations.findOne({ _id: reservation_id });
    if (!res) {
      return {
        status: 404,
        error: NewError("No reservation with this id"),
      };
    }

    const resMongo = await reservations.deleteOne({ _id: reservation_id });
    if (!resMongo.acknowledged) {
      return {
        status: 503,
        error: NewError("MongoDB Error"),
      };
    }

    return {
      status: 200,
      success: NewSuccess(`Deleted reservation ${res._id}`),
    };
  } catch (e) {
    console.error(`Error: ${e}`);
    return {
      status: 500,
      error: NewError("Server error"),
    };
  }
};
export { getAllReservations, createReservation, updateReservation, deleteReservation };
