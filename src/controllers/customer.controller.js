import Customer from "../models/Customer";

export const createCustomer = async (req, res) => {
  try {
    const { name, lastname, email, number, address, city } = req.body,
      customer = new Customer({
	name,
	lastname,
	email,
	number,
	address,
	city
      });
    await customer.save();
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  } 
};
