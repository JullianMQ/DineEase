import type { JSONObject } from "hono/utils/types";
import z from "zod";

export const zodMenuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.float64(),
  image_url: z.httpUrl(),
  category: z.enum(["Appetizer", "Main Course", "Dessert", "Beverage"]),
  available: z.boolean(),
});

export const menuItemSchemaChecker = (body: JSONObject) => {
  try {
    zodMenuItemSchema.parse(body);
  } catch (e) {
    throw `Zod ${e}`;
  }
};
