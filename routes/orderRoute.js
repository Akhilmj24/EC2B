import express from "express";
import {
    cancelOrders,
    getusersOrder,
    getorders,
  createOrder
} from "../controllers/order.js";

const router = express.Router();

router.post("/placeorder", createOrder);
router.get("/", getorders);
router.get("/userorders", getusersOrder);
router.put("/cancel/:id", cancelOrders);


export default router;
