import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    cartproduct: { type: Object, required: true },
    quantity: { type: Number, required: true },
    userId: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
