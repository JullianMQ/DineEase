import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth } from "./utils/auth.js";
import { seedMenu, seedReservation } from "./utils/seed.js";
import {
  createMenuItem,
  deleteMenuItem,
  getAllMenuItems,
  updateMenuItem,
} from "./handlers/menuHandler.js";
import { createReservation, deleteReservation, getAllReservations, updateReservation } from "./handlers/reservationHandler.js";

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
    const res = await createMenuItem(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }

    return c.json(res.success);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.put("/api/menu/:id", async (c) => {
  try {
    const res = await updateMenuItem(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }

    return c.json(res.success);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.delete("/api/menu/:id", async (c) => {
  try {
    const res = await deleteMenuItem(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }

    return c.json(res.success);
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
    const reservations = await getAllReservations(c);
    return c.json(reservations);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.post("/api/reservations", async (c) => {
  try {
    const res = await createReservation(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }

    return c.json(res.success);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.put("/api/reservations/:id", async (c) => {
  try {
    const res = await updateReservation(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }

    return c.json(res.success);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.delete("/api/reservations/:id", async (c) => {
  try {
    const res = await deleteReservation(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }

    return c.json(res.success);
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
