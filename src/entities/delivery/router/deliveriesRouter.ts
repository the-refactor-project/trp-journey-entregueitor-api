import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryDrizzleRepository from "../repository/DeliveryDrizzleRepository.js";

const deliveriesRouter = Router();

const deliveryRepository = new DeliveryDrizzleRepository();
const deliveryController = new DeliveryController(deliveryRepository);

deliveriesRouter.get("/", deliveryController.get);

export default deliveriesRouter;
