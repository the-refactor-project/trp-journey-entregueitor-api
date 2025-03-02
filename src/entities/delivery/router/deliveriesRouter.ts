import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryDrizzleRepository from "../repository/DeliveryDrizzleRepository.js";
import checkNewDeliveryBody from "../middlewares/checkNewDeliveryBody.js";

const deliveriesRouter = Router();

const deliveryRepository = new DeliveryDrizzleRepository();
const deliveryController = new DeliveryController(deliveryRepository);

deliveriesRouter.get("/:week", deliveryController.get);
deliveriesRouter.post("/", checkNewDeliveryBody, deliveryController.post);
deliveriesRouter.delete("/:deliveryId", deliveryController.delete);

export default deliveriesRouter;
