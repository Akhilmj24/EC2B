import express from "express";
import {
  createAddress,
  deleteAddress,
  getAddress,
  updateAddress,getOneAddress
} from "../controllers/address.js";

const router = express.Router();

router.post("/addaddress", createAddress);
router.delete("/:id", deleteAddress);
router.get("/", getAddress);
router.put("/:id", updateAddress);
router.get("/find/:id", getOneAddress);

export default router;
