import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth } from "./utils/auth.js";
import { seedMenu, seedReservation } from "./utils/seed.js";
import { createMenuItem, getAllMenuItems } from "./handlers/menuHandler.js";
import { getAllReservations } from "./handlers/reservationHandler.js";

const app = new Hono();
// WARN: FOR TESTING AND PROVIDING DATA IN THE DATABASE
// await seedMenu()
// await seedReservation()

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

//==================================USER=====================================
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
//==================================USER=====================================

//==================================MENU=====================================
app.get("/api/menu", async (c) => {
  try {
    const menu = await getAllMenuItems(c);
    return c.json(menu);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.post("/api/menu", async (c) => {
  try {
    await createMenuItem(c);
    console.log("test");
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});
//==================================MENU=====================================

//==================================RESERVATION==============================
app.get("/api/reservations", async (c) => {
  try {
    const menu = await getAllReservations(c);
    return c.json(menu);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});
//==================================RESERVATION==============================

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
