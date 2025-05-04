import "dotenv/config";
import { timestamp, integer, pgTable, varchar } from "drizzle-orm/pg-core";

const tableName = process.env.PROMO! + "_journey_deliveries";

export const deliveries = pgTable(tableName, {
  id: integer().primaryKey(),
  ownerId: integer().notNull(),
  week: integer().notNull(),
  firstTeammateId: integer(),
  secondTeammateId: integer(),
  frontRepoUrl: varchar(),
  frontProductionUrl: varchar(),
  backRepoUrl: varchar(),
  backProductionUrl: varchar(),
  sprint1TrelloUrl: varchar(),
  sprint2TrelloUrl: varchar(),
  sprint3TrelloUrl: varchar(),
  sprint4TrelloUrl: varchar(),
  figmaUrl: varchar(),
  projectName: varchar(),
  createdAt: timestamp().notNull(),
});
