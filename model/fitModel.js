import mongoose from "mongoose";

const fitSchema = new mongoose.Schema(
  {
    fitname: { type: String, required: true },
   
  },
  {
    timestamps: true,
  }
);

const Fit = mongoose.model("Fit", fitSchema);
export default Fit;
