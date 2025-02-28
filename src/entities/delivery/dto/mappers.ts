import { Delivery } from "../types.js";
import { DeliveryDto } from "./types.js";

export const convertDeliveryDtoToDelivery = (
  deliveryDto: DeliveryDto
): Delivery => {
  const { createdAt, ...deliveryDtoData } = deliveryDto;

  const delivery: Delivery = {
    ...deliveryDtoData,
    date: createdAt,
  };

  return delivery;
};

export const convertDeliveryToDeliveryDto = (
  delivery: Delivery
): DeliveryDto => {
  const { date, ...deliveryData } = delivery;

  const deliveryDto: DeliveryDto = {
    ...deliveryData,
    createdAt: date,
  };

  return deliveryDto;
};
