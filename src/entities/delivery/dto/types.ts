import { WithoutId } from "../../../types.js";
import { Delivery } from "../types.js";

export type DeliveryDto = Omit<Delivery, "date"> & {
  createdAt: Date;
};

export type NewDeliveryDataDto = Omit<WithoutId<Delivery>, "date">;
