import Payment from "../model/paymentModel.js";
import Razorpay from "razorpay";
export const getKey = async (req, res, next) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
};
export const createOrder = async (req, res, next) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
      payment_capture: 1,
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const payOrder = async (req, res, next) => {
  try {
    const {
      amount,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      productId,
      address,
      phone,
      paymentMode,
    } = req.body;
    const newOrder = Payment({
      isPaid: true,
      amount: amount,
      productId: productId,
      address: address,
      phone: phone,
      
      payment: {
        paymentMode:paymentMode,
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newOrder.save();
    res.send({
      message: "Payment was successfull",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
      

    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const listOrder = async (req, res, next) => {
  const orders = await Payment.find();
  res.send(orders);
};
