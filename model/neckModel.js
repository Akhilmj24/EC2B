import mongoose from "mongoose";

const neckSchema = new mongoose.Schema(
  {
    neckname: { type: String, required: true },
   
  },
  {
    timestamps: true,
  }
);

const Neck = mongoose.model("Neck", neckSchema);
export default Neck;
