import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    productid: { type: String, required: true, unique: true },
    
    image: { type: String  },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    colorname: { type: String, required: true },
    subcategory: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    strikeprice: { type: Number, required: true },
    fabric: { type: String, required: true },
    multipack: { type: String, required: true },
    neck: { type: String, required: true },
    fit: { type: String, required: true },
    occasion: { type: String, required: true },
    // Ssize: { type: String, required: true },

    // Lsize: { type: String, required: true },
    // Msize: { type: String, required: true },

    // XLsize: { type: String, required: true },

    // XXLsize: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
