import express from "express";
import {
  createBrand,
  getBrand,
  deleteBrand,
  createColor,
  getColor,
  deleteColor,
  createSubcategory,
  deleteSubcategory,
  getSubcategory,
  createCategory,
  deleteCategory,
  getCategory,
  createFabric,
  deleteFabric,
  getFabric,
  createFit,
  deleteFit,
  getFit,
  createMultipack,
  deleteMultipack,
  getMultipack,
  createNeck,
  deleteNeck,
  getNeck,
  createOccasion,
  deleteOccasion,
  getOccasion,
} from "../controllers/feature.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// BRAND
router.post("/createBrand", verifyAdmin, createBrand);
router.get("/brand", getBrand);
router.delete("/brand/:id", verifyAdmin, deleteBrand);

// COLOR
router.post("/createColor", verifyAdmin, createColor);
router.get("/color", getColor);
router.delete("/color/:id", verifyAdmin, deleteColor);

// Subcategory
router.post("/createsubcategory", verifyAdmin, createSubcategory);
router.get("/subcategory", getSubcategory);
router.delete("/subcategory/:id", verifyAdmin, deleteSubcategory);

// Category
router.post("/createcategory", verifyAdmin, createCategory);
router.get("/category", getCategory);
router.delete("/category/:id", verifyAdmin, deleteCategory);

// Fabric
router.post("/createfabric", verifyAdmin, createFabric);
router.get("/fabric", getFabric);
router.delete("/fabric/:id", verifyAdmin, deleteFabric);

// Fit
router.post("/createfit", verifyAdmin, createFit);
router.get("/fit", getFit);
router.delete("/fit/:id", verifyAdmin, deleteFit);

// Multipack
router.post("/createmultipack", verifyAdmin, createMultipack);
router.get("/multipack", getMultipack);
router.delete("/multipack/:id", verifyAdmin, deleteMultipack);

// Neck
router.post("/createneck", verifyAdmin, createNeck);
router.get("/neck", getNeck);
router.delete("/neck/:id", verifyAdmin, deleteNeck);

// Occasion
router.post("/createoccasion", verifyAdmin, createOccasion);
router.get("/occasion", getOccasion);
router.delete("/occasion/:id", verifyAdmin, deleteOccasion);

export default router;
