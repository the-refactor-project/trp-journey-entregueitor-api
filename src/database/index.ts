import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import chalk from "chalk";

const client = postgres(process.env.SUPABASE_POSTGRES_STRING!, {
  ssl: "require",
  debug: true,
});

export const db = drizzle(client);

console.log(chalk.blue("Connection has been established successfully."));
