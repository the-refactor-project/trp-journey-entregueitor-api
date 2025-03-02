import { Request, Response } from "express";

export interface DeliveryControllerStructure {
  get(req: Request, res: Response): Promise<void>;
  post(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
}
