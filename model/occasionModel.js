import mongoose from "mongoose";

const occasionSchema = new mongoose.Schema(
  {
    occasionname: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Occasion = mongoose.model("Occasion", occasionSchema);
export default Occasion;
