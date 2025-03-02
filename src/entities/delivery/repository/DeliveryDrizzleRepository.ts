import { and, asc, eq } from "drizzle-orm";
import { Delivery } from "../types.js";
import { DeliveryRepository } from "./types.js";
import { deliveries as deliveriesTable } from "../schema/deliveries.js";
import { DeliveryDto, NewDeliveryDataDto } from "../dto/types.js";
import {
  convertDeliveryDtoToDelivery,
  convertDeliveryToDeliveryDto,
} from "../dto/mappers.js";
import { db } from "../../../database/index.js";
import { Id } from "../../../types.js";

class DeliveryDrizzleRepository implements DeliveryRepository {
  public async getByWeek(weekNumber: number): Promise<Delivery[]> {
    const deliveriesDto: DeliveryDto[] = await db
      .select()
      .from(deliveriesTable)
      .where(eq(deliveriesTable.week, weekNumber))
      .orderBy(asc(deliveriesTable.createdAt));

    return deliveriesDto.map(convertDeliveryDtoToDelivery);
  }

  public async add(deliveryData: NewDeliveryDataDto): Promise<Delivery> {
    const deliveryDataDto = convertDeliveryToDeliveryDto(
      deliveryData as Delivery
    );

    const existingDeliveries = await db
      .select()
      .from(deliveriesTable)
      .where(
        and(
          eq(deliveriesTable.ownerId, deliveryData.ownerId),
          eq(deliveriesTable.week, deliveryData.week)
        )
      );

    if (existingDeliveries.length > 0) {
      throw new Error("Delivery already exists");
    }

    const [newDeliveryDto] = await db
      .insert(deliveriesTable)
      .values(deliveryDataDto)
      .returning();

    return convertDeliveryDtoToDelivery(newDeliveryDto);
  }

  public async delete(deliveryId: Id): Promise<void> {
    await db.delete(deliveriesTable).where(eq(deliveriesTable.id, deliveryId));
  }
}

export default DeliveryDrizzleRepository;
