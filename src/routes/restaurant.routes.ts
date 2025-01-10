import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.controller";

const router = Router();

router.post("/restaurant", createRestaurant);
router.get("/restaurant", getRestaurants);
router.patch("/restaurant/:id", updateRestaurant);
router.delete("/restaurant/:id", deleteRestaurant);
export default router;
