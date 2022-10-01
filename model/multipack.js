import mongoose from "mongoose";

const multipackSchema = new mongoose.Schema(
  {
    multipackname: { type: String, required: true },
   
  },
  {
    timestamps: true,
  }
);

const MultiPack = mongoose.model("MultiPack", multipackSchema);
export default MultiPack;
