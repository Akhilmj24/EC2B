import Brand from "../model/brandModel.js";
import Color from "../model/colorModel.js";
import Subcategory from "../model/subcategoryModel.js";
import Category from "../model/categoryModel.js";
import Fabric from "../model/fabricModel.js";
import Fit from "../model/fitModel.js";
import Multipack from "../model/multipack.js";
import Neck from "../model/neckModel.js";
import Occasion from "../model/occasionModel.js";
import { createError } from "../utils/error.js";

// BRAND

export const createBrand = async (req, res, next) => {
  const newBrand = new Brand(req.body);

  try {
    const brand = await Brand.findOne({ brandname: req.body.brandname });
    if (brand) return next(createError(409, "Already have same brand"));
    const savedBrand = await newBrand.save();
    res.status(200).json("Brand Created Successfully");
  } catch (error) {
    next(error);
  }
};
export const getBrand = async (req, res, next) => {
  try {
    const brand = await Brand.find();

    res.status(200).json(brand);
  } catch (error) {
    next(error);
  }
};
export const deleteBrand = async (req, res, next) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);

    res.status(200).json("Brand has been deleted.");
  } catch (error) {
    next(error);
  }
};

// COLOR

export const createColor = async (req, res, next) => {
  const newColor = new Color(req.body);

  try {
    const color = await Color.findOne({ colorname: req.body.colorname });
    if (color) return next(createError(409, "Already have same color"));
    const savedColor = await newColor.save();
    res.status(200).json("Color Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getColor = async (req, res, next) => {
  try {
    const color = await Color.find();

    res.status(200).json(color);
  } catch (error) {
    next(error);
  }
};
export const deleteColor = async (req, res, next) => {
  try {
    await Color.findByIdAndDelete(req.params.id);

    res.status(200).json("Color has been deleted.");
  } catch (error) {
    next(error);
  }
};

// Subcategory

export const createSubcategory = async (req, res, next) => {
  const newSubcategory = new Subcategory(req.body);

  try {
    const subcategory = await Subcategory.findOne({
      subcategoryname: req.body.subcategoryname,
    });
    if (subcategory) return next(createError(409, "Already have Subcategory"));
    const savedSubcategory = await newSubcategory.save();
    res.status(200).json("Subcategory Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getSubcategory = async (req, res, next) => {
  try {
    const subcategory = await Subcategory.find();

    res.status(200).json(subcategory);
  } catch (error) {
    next(error);
  }
};
export const deleteSubcategory = async (req, res, next) => {
  try {
    await Subcategory.findByIdAndDelete(req.params.id);

    res.status(200).json("Subcategory has been deleted.");
  } catch (error) {
    next(error);
  }
};
// Category

export const createCategory = async (req, res, next) => {
  const newCategory = new Category(req.body);

  try {
    const category = await Category.findOne({
      categoryname: req.body.categoryname,
    });
    if (category) return next(createError(409, "Already have Category"));
    const savedCategory = await newCategory.save();
    res.status(200).json("Category Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const category = await Category.find();

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};
export const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json("Category has been deleted.");
  } catch (error) {
    next(error);
  }
};
// Fabric

export const createFabric = async (req, res, next) => {
  const newFabric = new Fabric(req.body);

  try {
    const fabric = await Fabric.findOne({
      fabricname: req.body.fabricname,
    });
    if (fabric) return next(createError(409, "Already have this fabric"));
    const savedfabric = await newFabric.save();
    res.status(200).json("Fabric Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getFabric = async (req, res, next) => {
  try {
    const fabric = await Fabric.find();

    res.status(200).json(fabric);
  } catch (error) {
    next(error);
  }
};
export const deleteFabric = async (req, res, next) => {
  try {
    await Fabric.findByIdAndDelete(req.params.id);

    res.status(200).json("Fabric has been deleted.");
  } catch (error) {
    next(error);
  }
};

// FIT
export const createFit = async (req, res, next) => {
  const newFit = new Fit(req.body);

  try {
    const fit = await Fit.findOne({
      fitname: req.body.fitname,
    });
    if (fit) return next(createError(409, "Already have fit type"));
    const savedfit = await newFit.save();
    res.status(200).json("Fit Type Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getFit = async (req, res, next) => {
  try {
    const fit = await Fit.find();

    res.status(200).json(fit);
  } catch (error) {
    next(error);
  }
};
export const deleteFit = async (req, res, next) => {
  try {
    await Fit.findByIdAndDelete(req.params.id);

    res.status(200).json("Fit type has been deleted.");
  } catch (error) {
    next(error);
  }
};

// Multipack
export const createMultipack = async (req, res, next) => {
  const newMultipack = new Multipack(req.body);

  try {
    const multipack = await Multipack.findOne({
      multipackname: req.body.multipackname,
    });
    if (multipack) return next(createError(409, "Already have Multipack"));
    const savedMultipack = await newMultipack.save();
    res.status(200).json("Multipack Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getMultipack = async (req, res, next) => {
  try {
    const multipack = await Multipack.find();

    res.status(200).json(multipack);
  } catch (error) {
    next(error);
  }
};
export const deleteMultipack = async (req, res, next) => {
  try {
    await Multipack.findByIdAndDelete(req.params.id);

    res.status(200).json("Multipack has been deleted.");
  } catch (error) {
    next(error);
  }
};


// Neck
export const createNeck = async (req, res, next) => {
  const newNeck = new Neck(req.body);

  try {
    const neck = await Neck.findOne({
      neckname: req.body.neckname,
    });
    if (neck) return next(createError(409, "Already have neck type"));
    const savedNeck = await newNeck.save();
    res.status(200).json("Neck Type Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getNeck = async (req, res, next) => {
  try {
    const neck = await Neck.find();

    res.status(200).json(neck);
  } catch (error) {
    next(error);
  }
};
export const deleteNeck = async (req, res, next) => {
  try {
    await Neck.findByIdAndDelete(req.params.id);

    res.status(200).json("Neck Type has been deleted.");
  } catch (error) {
    next(error);
  }
};
// Neck
export const createOccasion = async (req, res, next) => {
  const newOccasion = new Occasion(req.body);

  try {
    const neck = await Occasion.findOne({
      occasionname: req.body.occasionname,
    });
    if (neck) return next(createError(409, "Already have occasion Type"));
    const savedOccasion = await newOccasion.save();
    res.status(200).json("Occasion Type Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const getOccasion = async (req, res, next) => {
  try {
    const neck = await Occasion.find();

    res.status(200).json(neck);
  } catch (error) {
    next(error);
  }
};
export const deleteOccasion = async (req, res, next) => {
  try {
    await Occasion.findByIdAndDelete(req.params.id);

    res.status(200).json("Occasion Type has been deleted.");
  } catch (error) {
    next(error);
  }
};