import { NextFunction, Request, Response } from "express";
import { NewDeliveryBodySchema } from "../schema/zodDeliveries.js";
import chalk from "chalk";

const checkNewDeliveryBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    NewDeliveryBodySchema.parse(req.body);

    next();
  } catch (error: unknown) {
    console.log(chalk.red((error as Error).message));
    res.status(400).json({ error: "Wrong body" });
  }
};

export default checkNewDeliveryBody;
