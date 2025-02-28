import { Delivery } from "../types.js";

export type DeliveryDto = Omit<Delivery, "date"> & {
  createdAt: Date;
};
