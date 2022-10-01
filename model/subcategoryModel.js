import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema(
  {
    subcategoryname: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Subcategory = mongoose.model("Subcategory", subcategorySchema);
export default Subcategory;
