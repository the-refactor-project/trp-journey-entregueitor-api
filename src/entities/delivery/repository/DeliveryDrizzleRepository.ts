import { asc, eq } from "drizzle-orm";
import { Delivery } from "../types.js";
import { DeliveryRepository } from "./types.js";
import { deliveries as deliveriesTable } from "../schema/deliveries.js";
import { DeliveryDto, NewDeliveryDataDto } from "../dto/types.js";
import {
  convertDeliveryDtoToDelivery,
  convertDeliveryToDeliveryDto,
} from "../dto/mappers.js";
import { db } from "../../../database/index.js";

class DeliveryDrizzleRepository implements DeliveryRepository {
  public async getByWeek(weekNumber: number): Promise<Delivery[]> {
    const deliveriesDto: DeliveryDto[] = await db
      .select()
      .from(deliveriesTable)
      .where(eq(deliveriesTable.week, weekNumber))
      .orderBy(asc(deliveriesTable.createdAt));

    return deliveriesDto.map(convertDeliveryDtoToDelivery);
  }

  public async addDelivery(
    deliveryData: NewDeliveryDataDto
  ): Promise<Delivery> {
    const deliveryDataDto = convertDeliveryToDeliveryDto(
      deliveryData as Delivery
    );

    const [newDeliveryDto] = await db
      .insert(deliveriesTable)
      .values(deliveryDataDto)
      .returning();

    return convertDeliveryDtoToDelivery(newDeliveryDto);
  }
}

export default DeliveryDrizzleRepository;
