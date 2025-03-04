import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryDrizzleRepository from "../repository/DeliveryDrizzleRepository.js";
import checkNewDeliveryBody from "../middlewares/checkNewDeliveryBody.js";
import validateToken from "../../../auth/middlewares/validateToken.js";

const deliveriesRouter = Router();

const deliveryRepository = new DeliveryDrizzleRepository();
const deliveryController = new DeliveryController(deliveryRepository);

deliveriesRouter.get("/:week", validateToken, deliveryController.get);
deliveriesRouter.post(
  "/",
  validateToken,
  checkNewDeliveryBody,
  deliveryController.post
);
deliveriesRouter.delete(
  "/:deliveryId",
  validateToken,
  deliveryController.delete
);

export default deliveriesRouter;
