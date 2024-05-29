import { timestamp, text, numeric, pgSchema, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const mySchema = pgSchema("my_schema");
export const recordType = mySchema.enum("recordType", ["income", "expense"]);

export const records = pgTable("records", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId"),
  date: timestamp("date"),
  value: numeric("value").notNull(),
  recordType: recordType("recordType"),
  description: text("description"),
});

export const insertRecordSchema = createInsertSchema(records);
