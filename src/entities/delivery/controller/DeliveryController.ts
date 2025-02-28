import { Request, Response } from "express";
import { DeliveryControllerStructure } from "./types.js";
import DeliveryRepository from "../repository/types.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
  }

  async get(_req: Request, res: Response): Promise<void> {
    const deliveries = await this.deliveryRepository.get();

    res.status(200).json({ deliveries });
  }
}

export default DeliveryController;
