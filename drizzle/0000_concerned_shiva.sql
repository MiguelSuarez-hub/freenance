CREATE SCHEMA "my_schema";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "my_schema"."recordType" AS ENUM('income', 'expense');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "my_schema"."records" (
	"id" text PRIMARY KEY NOT NULL,
	"date" timestamp,
	"value" numeric NOT NULL,
	"recordType" "my_schema"."recordType",
	"description" text
);
