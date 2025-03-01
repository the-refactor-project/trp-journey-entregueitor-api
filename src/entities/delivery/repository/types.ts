import { NewDeliveryDataDto } from "../dto/types.js";
import { Delivery } from "../types.js";

export interface DeliveryRepository {
  getByWeek(weekNumber: number): Promise<Delivery[]>;
  addDelivery(deliveryData: NewDeliveryDataDto): Promise<Delivery>;
}
