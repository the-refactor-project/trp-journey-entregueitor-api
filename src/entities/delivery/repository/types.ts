import { Id } from "../../../types.js";
import { NewDeliveryDataDto } from "../dto/types.js";
import { Delivery } from "../types.js";

export interface DeliveryRepository {
  getByWeek(weekNumber: number): Promise<Delivery[]>;
  add(deliveryData: NewDeliveryDataDto): Promise<Delivery>;
  delete(deliveryId: Id): Promise<void>;
}
