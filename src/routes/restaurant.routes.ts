import { Router } from "express";
import { getRestaurantOrders } from "../controllers/restaurant.controller";

const router = Router();
router.get("/restaurant/:id/orders", getRestaurantOrders);
export default router;
