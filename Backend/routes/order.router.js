import express from "express";
import {
  AddOrder,
  getMyOrder,
  getOrderById,
  getOrders,
} from "../controller/order.controller.js";
import { checkAdmin, checkAuth } from "../middleware/auth.user.js";

const router = express.Router();
router.post("/addOrder", checkAuth, AddOrder);
router.get("/getOrders", checkAuth, checkAdmin, getOrders);
router.get("/myorders/:id", checkAuth, getMyOrder);
router.get("/:id", checkAuth, getOrderById);

export default router;
