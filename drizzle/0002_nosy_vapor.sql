CREATE TABLE IF NOT EXISTS "records" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text,
	"date" timestamp,
	"value" numeric NOT NULL,
	"recordType" "my_schema"."recordType",
	"description" text
);
--> statement-breakpoint
DROP TABLE "my_schema"."records";