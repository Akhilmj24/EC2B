import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    address: { type: Object, required: true },
    pincode: { type: String, required: true },
    landmark: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);
export default Address;
