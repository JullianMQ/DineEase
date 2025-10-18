import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth, type AuthType } from "./utils/auth.js";
import { seedMenu, seedReservation } from "./utils/seed.js";
import {
  createMenuItem,
  deleteMenuItem,
  getAllMenuItems,
  updateMenuItem,
} from "./handlers/menuHandler.js";
import {
  createReservation,
  deleteReservation,
  getAllReservations,
  getAvailReservation,
  updateReservation,
} from "./handlers/reservationHandler.js";
import { canModifyReservation, requireAdmin, requireAuth } from "./middleware/authMiddleware.js";
import { cors } from "hono/cors";
import { uploadImage } from "./handlers/uploadHandler.js";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>({ strict: false });
// WARN: FOR TESTING AND PROVIDING DATA IN THE DATABASE
// await seedMenu()
// await seedReservation()

// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

app.use("*", cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.use('/uploads/*', serveStatic({ root: './public' }))
app.use("/uploads/*", async (c, next) => {
  await next();
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

app.post("/api/menu", requireAdmin, async (c) => {
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

app.post("/api/upload/image", requireAdmin, async (c) => {
  try {
    const res = await uploadImage(c);
    c.status(res.status);
    if (res.error) {
      return c.json(res.error);
    }
    return c.json(res.success?.urlImage);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
});

app.put("/api/menu/:id", requireAdmin, async (c) => {
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

app.delete("/api/menu/:id", requireAdmin, async (c) => {
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

app.get("/api/reservations/avail", async (c) => {
  try {
    const reservations = await getAvailReservation(c);
    return c.json(reservations);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "Server error, check the logs" });
  }
})

app.post("/api/reservations", async (c) => {
  try {
    // TODO: CREATE CHECKER FOR WHICH SEATS ARE AVAILABLE ALONG WITH DATES AND TIME
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

app.put("/api/reservations/:id", canModifyReservation, async (c) => {
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

app.delete("/api/reservations/:id", canModifyReservation, async (c) => {
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
