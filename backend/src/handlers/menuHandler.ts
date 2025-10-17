import type { Context } from "hono";
import { db } from "../utils/db.js";
import { menuItemSchemaChecker, zodMenuItemSchema } from "../utils/menuItemSchema.js";
import { NewError, NewSuccess, type HandlerResult } from "../utils/success.js";
import { ZodError } from "zod";
import isIDValid from "../utils/isIdValid.js";
import { ObjectId } from "mongodb";

const menu = db.collection("menu");

const getAllMenuItems = async (c: Context) => {
  try {
    const menuData = await menu.find().toArray();
    return menuData;
  } catch (e) {
    throw `Error: ${e}`;
  }
};

const createMenuItem = async (c: Context): Promise<HandlerResult> => {
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
    const res = menuItemSchemaChecker(body);
    if (res instanceof ZodError) {
      console.error(`Error: ${res.message}`);
      return {
        status: 400,
        error: NewError(
          "Menu item parsing failed, please make sure details are correct",
        ),
      };
    }

    const mongoRes = await menu.insertOne(res);
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

const updateMenuItem = async (c: Context): Promise<HandlerResult> => {
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
    const item_id = isIDValid(c);
    if (!item_id) {
      return {
        status: 400,
        error: NewError(
          "Error inputted id is incorrect, should be 24 characters",
        ),
      };
    }

    const res = await menu.findOne({ _id: item_id });
    if (!res) {
      return {
        status: 404,
        error: NewError("No item with this id"),
      };
    }

    const resZod = zodMenuItemSchema.strict().partial().safeParse(updateBody);
    if (!resZod.success) {
      return {
        status: 400,
        error: NewError("Invalid data"),
      };
    }

    await menu.updateOne({ _id: new ObjectId(item_id) }, { $set: updateBody });

    return {
      status: 200,
      success: NewSuccess("Successfully updated menu item"),
    };
  } catch (e) {
    console.error(`Error: ${e}`);
    return {
      status: 500,
      error: NewError("Server error"),
    };
  }
};

const deleteMenuItem = async (c: Context): Promise<HandlerResult> => {
  try {
    const item_id = isIDValid(c);
    if (!item_id) {
      return {
        status: 400,
        error: NewError(
          "Error inputted id is incorrect, should be 24 characters",
        ),
      };
    }

    const res = await menu.findOne({ _id: item_id });
    if (!res) {
      return {
        status: 404,
        error: NewError("No item with this id"),
      };
    }

    const resMongo = await menu.deleteOne({ _id: item_id });
    if (!resMongo.acknowledged) {
      return {
        status: 503,
        error: NewError("MongoDB Error"),
      };
    }

    return {
      status: 200,
      success: NewSuccess(`Deleted item ${res._id}`),
    };
  } catch (e) {
    console.error(`Error: ${e}`);
    return {
      status: 500,
      error: NewError("Server error"),
    };
  }
};

export { getAllMenuItems, createMenuItem, updateMenuItem, deleteMenuItem };
