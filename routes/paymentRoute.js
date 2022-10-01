import express from "express";
import { createOrder,getKey,payOrder,listOrder } from "../controllers/payment.js";

const router = express.Router();

router.post("/createorder", createOrder)
router.get("/", getKey)
router.post("/payorder", payOrder)
router.get("/listorder", listOrder)



export default router