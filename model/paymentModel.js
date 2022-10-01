import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
  isPaid: Boolean,
  amount: Number,
  productId:Array,
  address:Object,
  phone:String,
  
  payment: {
    paymentMode: String,
    orderId: String,
    paymentId: String,
    signature: String,
  },

 
});
const payment = mongoose.model("payment", PaymentSchema);

export default payment;
