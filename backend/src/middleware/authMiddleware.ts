import { createMiddleware } from "hono/factory";
import { auth } from "../utils/auth.js";
import isIDValid from "../utils/isIdValid.js";
import { ObjectId } from "mongodb";
import { reservations } from "../handlers/reservationHandler.js";

const requireAuth = createMiddleware<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});

const requireAdmin = createMiddleware<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session || session.user.role !== "admin") {
    return c.json({ message: "Forbidden" }, 403);
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});

const canModifyReservation = createMiddleware<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.json({ message: "Forbidden" }, 403);
  }

  const reservation_id = isIDValid(c);
  if (!reservation_id) {
    c.status(400);
    return c.json({
      error: "Error inputted id is incorrect, should be 24 characters",
    });
  }

  const res = await reservations.findOne({
    _id: new ObjectId(reservation_id),
  });
  if (!res) {
    c.status(404);
    return c.json({ message: "No reservation with this id" });
  }

  if (res.email === session.user.email || session.user.role === "admin") {
    return next();
  }

  c.status(403);
  return c.json({ message: "Forbidden to change this resource" });
});

export { requireAuth, requireAdmin, canModifyReservation };
