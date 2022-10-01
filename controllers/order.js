import Order from "../model/orderModel.js";

export const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json("Order Placed Successfully");
  } catch (err) {
    next(err);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const Order = await Order.findById(req.params.id);
    res.status(200).json(Order);
  } catch (err) {
    next(err);
  }
};
export const getorders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).sort({
      createdAt: -1,
      updatedAt: -1,
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};
export const getusersOrder = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const allorders = await Order.find({});
    const usersOrders = allorders.filter((order) => order.userId === userId);

    res.status(200).json(usersOrders);
  } catch (err) {
    next(err);
  }
};
export const cancelOrders = async (req, res, next) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, { orderStatus: "cancel" });
    res.status(200).json("Order canceled");
  } catch (err) {
    next(err);
  }
};
