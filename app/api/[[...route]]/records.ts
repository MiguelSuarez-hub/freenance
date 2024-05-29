import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";

import { db } from "@/db/drizzle";
import { insertRecordSchema, records } from "@/db/schema";
import { eq } from "drizzle-orm";

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const data = await db
      .select({
        date: records.date,
        recordType: records.recordType,
        value: records.value,
      })
      .from(records)
      .where(eq(records.userId, auth.userId));
    return c.json({ data });
  })
  .post(
    "/",
    clerkMiddleware(),
    zValidator(
      "json",
      insertRecordSchema.pick({ date: true, value: true, recordType: true })
    ),
    async (c) => {
      const auth = getAuth(c);
      const values = c.req.valid("json");

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const [data] = await db
        .insert(records)
        .values({
          userId: auth.userId,
          ...values,
        })
        .returning();
      return c.json({ data });
    }
  );

export default app;
