import "dotenv/config";
import { timestamp, integer, pgTable, varchar } from "drizzle-orm/pg-core";

const tableName = process.env.PROMO! + "_journey_deliveries";

export const deliveries = pgTable(tableName, {
  id: integer().primaryKey(),
  owner: varchar().notNull(),
  firstTeammateName: varchar(),
  secondTeammateName: varchar(),
  frontRepoUrl: varchar(),
  frontProductionUrl: varchar(),
  backRepoUrl: varchar(),
  backProductionUrl: varchar(),
  sprint1TrelloUrl: varchar(),
  sprint2TrelloUrl: varchar(),
  createdAt: timestamp().notNull(),
});
