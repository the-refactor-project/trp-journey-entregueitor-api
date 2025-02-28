import fs from "node:fs/promises";
import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import { db } from "../index.js";
import { deliveries as deliveriesTable } from "../../entities/delivery/schema/deliveries.js";

const isBackupNeeded = async (
  _req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const { date } = JSON.parse(
    await fs.readFile("dumps/last-dump-date.json", "utf8")
  ) as { date: Date };

  const millisecondsSinceLastBackup = Date.now() - new Date(date).getTime();
  const millisecondsInOneDay = 24 * 60 * 60 * 1000;

  if (millisecondsSinceLastBackup > millisecondsInOneDay) {
    console.log(chalk.blue("Dumping database..."));
    backupDataBase();
  }

  next();
};

const backupDataBase = async () => {
  fs.writeFile(
    "dumps/last-dump-date.json",
    JSON.stringify({ date: new Date() }, null, 2)
  );

  const deliveries = await db.select().from(deliveriesTable);
  fs.writeFile("dumps/deliveries.json", JSON.stringify(deliveries, null, 2));
};

export default isBackupNeeded;
