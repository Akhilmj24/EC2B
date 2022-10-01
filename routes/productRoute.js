import express from "express";
import { createProduct ,getProduct,getProducts,deleteProduct,updateProduct,countByType, updateProductByOrder} from "../controllers/product.js";

const router = express.Router();

router.post("/createProduct", createProduct)
router.get("/find/:id", getProduct)
router.get("/", getProducts)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)
router.put("/order/:id", updateProductByOrder)
router.get("/countByType", countByType)



export default router