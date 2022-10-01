import Product from "../model/productModel.js";
import Subcategory from "../model/subcategoryModel.js";
import Category from "../model/categoryModel.js";
import { createError } from "../utils/error.js";
import { query } from "express";

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);

  try {
    const product = await Product.findOne({ productid: req.body.productid });
    if (product) return next(createError(409, "Already have same product id"));
    const savedProduct = await newProduct.save();
    res.status(200).json("Product Created Successfully");
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
export const getProducts = async (req, res, next) => {
  const { min, max, categorys, subcategorys, ...others } = req.query;
  const defaultSubc = await Subcategory.find();
  const defaultCate = await Category.find();

  try {
    const products = await Product.find({
      ...others,
      price: { $gte: min || 1, $lte: max || 99999999 },
      subcategory: {
        $in: categorys || defaultSubc.map((data) => data.subcategoryname),
      },
      category: {
        $in: subcategorys || defaultCate.map((data) => data.categoryname),
      },
    })
      .sort({
        createdAt: -1,
        updatedAt: -1,
      })
      .limit(req.query.limit);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Product Updated Successfully");
  } catch (err) {
    next(err);
  }
};
export const updateProductByOrder = async (req, res, next) => {
  const { quantity } = req.query;
  // console.log(quantity)

  
  try {
    const productQuantity = await Product.findById(req.params.id);
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,

      { countInStock: productQuantity.countInStock - parseInt(quantity) },
      { new: true }
    );
    res.status(200).json("Product Updated Successfully");
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const shirtCount = await Product.countDocuments({ subcategory: "shirt" });
    const jeansCount = await Product.countDocuments({ subcategory: "jeans" });

    res.status(200).json([
      { subcategory: "shirt", count: shirtCount },
      { subcategory: "jeans", count: jeansCount },
    ]);
  } catch (err) {
    next(err);
  }
};
