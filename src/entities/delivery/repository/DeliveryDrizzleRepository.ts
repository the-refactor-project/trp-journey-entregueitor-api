import { asc } from "drizzle-orm";
import { Delivery } from "../types.js";
import DeliveryRepository from "./types.js";
import { deliveries as deliveriesTable } from "../schema/deliveries.js";
import { DeliveryDto } from "../dto/types.js";
import { convertDeliveryDtoToDelivery } from "../dto/mappers.js";
import { db } from "../../../database/index.js";

class DeliveryDrizzleRepository implements DeliveryRepository {
  public async get(): Promise<Delivery[]> {
    const deliveriesDto: DeliveryDto[] = await db
      .select()
      .from(deliveriesTable)
      .orderBy(asc(deliveriesTable.createdAt));

    return deliveriesDto.map(convertDeliveryDtoToDelivery);
  }
}

export default DeliveryDrizzleRepository;
