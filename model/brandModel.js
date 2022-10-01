import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brandname: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
