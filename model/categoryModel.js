import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryname: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
