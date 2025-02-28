import { Delivery } from "../types.js";

export interface DeliveryRepository {
  get(): Promise<Delivery[]>;
}

export default DeliveryRepository;
