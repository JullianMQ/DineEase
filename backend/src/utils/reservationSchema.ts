import type { JSONObject } from "hono/utils/types";
import z, { ZodError } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // yyyy-mm-dd
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // hh:mm (24-hour)
export const zodReservationSchema = z.object({
  reservee_name: z.string(),
  email: z.email(),
  seat_num: z.int().positive(),
  date: z
    .string()
    .regex(dateRegex, { message: "Date must be in format YYYY-MM-DD" }),
  time: z
    .string()
    .regex(timeRegex, { message: "Time must be in format HH:MM (24-hour)" }),
  status: z.enum(["Pending", "Confirmed", "Cancelled"]).default("Pending"),
});

interface reservationSchema {
  reservee_name: string;
  email: string;
  seat_num: number;
  date: string;
  time: string;
  status: "Pending" | "Confirmed" | "Cancelled";
}

export const reservationSchemaChecker = (
  body: JSONObject,
): reservationSchema | ZodError => {
  try {
    const res = zodReservationSchema.parse(body);
    return res;
  } catch (e) {
    if (e instanceof ZodError) {
      return e;
    }
    throw e;
  }
};
