import Order from "../model/order.model.js";

// /api/v1/listing/order
// method: "POST"
const AddOrder = async (req, res) => {
  try {
    let { orderItems, shippingAddress, itemPrice, shippingCharge, totalPrice } =
      req.body;
    let order = await Order.create({
      orderItems: orderItems.map((item) => ({
        ...item,
        listing: item._id, // Ensure item._id exists and is correct
        _id: undefined,
      })),
      user: req.user._id, // This should be defined
      shippingAddress,
      itemPrice,
      shippingCharge,
      totalPrice,
    });
    res.status(201).json({ Message: "Order successfully added", data: order });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: `${error}`,
      Message: "Error white Ordering",
      success: false,
    });
  }
};

const getOrders = async (req, res) => {
  const orders = await Order.find({}).populate("user", "name email -_id");
  res.send(orders);
};

const getOrderById = async (req, res) => {
  try {
    let id = req.params.id;
    const order = await Order.findById(id).populate("user", "name email -_id");
    if (!order) {
      res.status(404).json({ Message: "Order Not Found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Server Error" });
  }
};

const getMyOrder = async (req, res) => {
  try {
    let order = await Order.find({ user: req.user._id }).populate(
      "user",
      "name email -_id"
    );
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Server error" });
  }
};

export { AddOrder, getOrders, getOrderById, getMyOrder };
