import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import records from "./records";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", clerkMiddleware(), (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: "You are not logged in.",
    });
  }
  return c.json({
    message: "Hello Next.js!",
    user: auth.userId,
  });
});

const routes = app.route("/records", records);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
