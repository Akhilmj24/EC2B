import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productid: { type: Array, required: true },
    phone: { type: Number, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    productQuantity: { type: Array, required: true },
    paymentdetails: {
      paymentMode:  { type: String, required: true },
      orderId:  { type: String, required: true },
      paymentId:  { type: String, required: true },
      signature:  { type: String, required: true },
    },
    orderStatus:{ type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
