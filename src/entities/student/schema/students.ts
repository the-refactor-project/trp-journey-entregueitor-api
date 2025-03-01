import "dotenv/config";
import { timestamp, integer, pgTable, varchar } from "drizzle-orm/pg-core";

const tableName = process.env.PROMO! + "_students";

export const students = pgTable(tableName, {
  id: integer().primaryKey(),
  username: varchar().notNull(),
  name: varchar().notNull(),
  lastName: varchar().notNull(),
  createdAt: timestamp().notNull(),
});
