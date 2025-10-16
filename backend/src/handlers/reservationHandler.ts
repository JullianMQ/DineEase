import type { Context } from "hono";
import { db } from "../utils/db.js";

const reservations = db.collection("reservations");

const getAllReservations = async (c: Context) => {
  try {
    const reservationData = await reservations.find().toArray();
    return reservationData;
  } catch (e) {
    throw `Error: ${e}`;
  }
};

export { getAllReservations };
