import { Router } from "express";
import {
  createRestaurantOrder,
  getOrder,
  updateOrder,
} from "../controllers/order.controller";

const router = Router();

router.post("/restaurant/:id/orders", createRestaurantOrder);
router.get("/orders", getOrder);
router.patch("/orders/:orderId", updateOrder);

export default router;
