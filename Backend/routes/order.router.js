import express from "express";
import {
  AddOrder,
  getMyOrder,
  getOrderById,
  getOrders,
} from "../controller/order.controller.js";
import { checkAuth } from "../middleware/auth.user.js";

const router = express.Router();
router.post("/addOrder", checkAuth, AddOrder);
router.get("/getOrders", checkAuth, getOrders);
router.get("/myorders", checkAuth, getMyOrder);
router.get("/:id", checkAuth, getOrderById);

export default router;
