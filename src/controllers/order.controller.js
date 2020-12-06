import Order from "../models/Order";
import Customer from "../models/Customer";
import sendMail from '../libs/mailer';

export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { products, total, customer } = req.body,
      order = new Order({
	products,
	total,
	customer,
      });
    await order.save();
    const customerInformation = await Customer.findById(customer);
    await sendMail(customerInformation, order);
    res.status(200).json({
      message: "Order saved successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  } 
};
