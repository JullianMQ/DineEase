import type { Context } from "hono";
import { db } from "../utils/db.js";

const menu = db.collection("menu");

const getAllMenuItems = async (c: Context) => {
  try {
    const menuData = await menu.find().toArray();
    return menuData;
  } catch (e) {
    throw `Error: ${e}`;
  }
};

export { getAllMenuItems };
