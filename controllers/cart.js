import { createError } from "../utils/error.js";
import Product from "../model/productModel.js";
import Cart from "../model/cartModel.js";

export const addCart = async (req, res, next) => {
  const { productId } = req.query;
  const product = await Product.findById(productId);

  if (!product) {
    return next(createError(409, "Product id is not valid"));
  }
  const cartProduct = {
    cartproduct: product,
    userId: req.body.userId,
    quantity: 1,
  };
  const newCart = new Cart(cartProduct);

  try {
    const savedCart = await newCart.save();
    res.status(200).json("Added to cart successfully");
    // res.status(200).json(savedCart);
  } catch (err) {
    next(err);
  }
};
export const getCartProduct = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const cartproduct = await Cart.find({});
    const getCartproducts = cartproduct.filter(
      (product) => product.userId === userId
    );
    res.status(200).json(getCartproducts);
  } catch (err) {
    next(err);
  }
};
export const cartProductCount = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const cartproduct = await Cart.find({ userId: userId }).count();

    res.status(200).json(cartproduct);
  } catch (err) {
    next(err);
  }
};
export const cartUpdateProduct = async (req, res, next) => {
  try {
    const cartupdateproduct = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json("Cart Updated Successfully");
  } catch (err) {
    next(err);
  }
};
export const cartRemoveProduct = async (req, res, next) => {
  try {
    const cartRemoveProduct = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Updated Successfully");
  } catch (err) {
    next(err);
  }
};
