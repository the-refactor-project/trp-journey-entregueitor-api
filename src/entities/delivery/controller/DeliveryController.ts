import { Request, Response } from "express";
import { DeliveryControllerStructure } from "./types.js";
import { DeliveryRepository } from "../repository/types.js";
import { NewDeliveryDataDto } from "../dto/types.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
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

    const newDelivery = await this.deliveryRepository.addDelivery(deliveryData);

    res.status(201).json({ newDelivery });
  }
}

export default DeliveryController;
