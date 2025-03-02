import { Request, Response } from "express";
import { DeliveryControllerStructure } from "./types.js";
import { DeliveryRepository } from "../repository/types.js";
import { NewDeliveryDataDto } from "../dto/types.js";
import chalk from "chalk";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async get(req: Request, res: Response): Promise<void> {
    const { week } = req.params;

    const deliveries = await this.deliveryRepository.getByWeek(Number(week));

    res.status(200).json({ deliveries });
  }

  public async post(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      NewDeliveryDataDto
    >,
    res: Response
  ): Promise<void> {
    const deliveryData = req.body;

    try {
      const newDelivery = await this.deliveryRepository.add(deliveryData);

      res.status(201).json({ newDelivery });
    } catch (error: unknown) {
      console.log(chalk.red("Error: ", (error as Error).message));

      res.status(409).json({ error: "Delivery already exists" });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { deliveryId } = req.params;

    await this.deliveryRepository.delete(Number(deliveryId));

    res.status(200).json({ deleted: true });
  }
}

export default DeliveryController;
