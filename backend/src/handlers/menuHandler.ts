import type { Context } from "hono";
import { db } from "../utils/db.js";
import { menuItemSchemaChecker } from "../utils/menuItem.js";

const menu = db.collection("menu");

const getAllMenuItems = async (c: Context) => {
  try {
    const menuData = await menu.find().toArray();
    return menuData;
  } catch (e) {
    throw `Error: ${e}`;
  }
};

const createMenuItem = async (c: Context) => {
  try {
    const body = await c.req.json();
    menuItemSchemaChecker(body)
    console.log("body", body);
  } catch (e) {
    throw `${e}`;
  }
};

export { getAllMenuItems, createMenuItem };
