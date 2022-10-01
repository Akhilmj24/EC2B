import mongoose from "mongoose";

const fabricSchema = new mongoose.Schema(
  {
    fabricname: { type: String, required: true },
   
  },
  {
    timestamps: true,
  }
);

const Fabric = mongoose.model("Fabric", fabricSchema);
export default Fabric;
