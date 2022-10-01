import express from "express";
import {
  addCart,
  getCartProduct,
  cartProductCount,
  cartUpdateProduct,
  cartRemoveProduct,
} from "../controllers/cart.js";

const router = express.Router();

router.post("/addcart", addCart);
router.get("/", getCartProduct);
router.get("/count", cartProductCount);
router.put("/:id", cartUpdateProduct);
router.delete("/:id", cartRemoveProduct);

export default router;
