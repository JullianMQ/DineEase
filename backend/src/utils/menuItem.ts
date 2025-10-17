import type { JSONObject } from "hono/utils/types";
import z, { ZodError } from "zod";

export const zodMenuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.float64(),
  image_url: z.httpUrl(),
  category: z.enum(["Appetizer", "Main Course", "Dessert", "Beverage"]),
});
available: z.boolean(),

interface menuItemSchema {
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: "Appetizer" | "Main Course" | "Dessert" | "Beverage";
  available: boolean;
}

export const menuItemSchemaChecker = (
  body: JSONObject,
): menuItemSchema | ZodError => {
  try {
    const res = zodMenuItemSchema.parse(body);
    return res;
  } catch (e) {
    if (e instanceof ZodError) {
      return e;
    }
    throw e;
  }
};
