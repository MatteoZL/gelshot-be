import Product from "../models/Product";

export const allProducts = async (req, res) => {
  try {
    const products = await Product.find().sort('name');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const productsByType = async (req, res) => {
  try {
    const product = await Product.find({type: req.params.type}).sort('name');
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const productsByTypeDrink = async (req, res) => {
  try {
    const product = await Product.find({type: req.params.type, drink: req.params.drink}).sort('name');
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const productById = async (req, res) => {
  try {
    const id = req.body.id,
      product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};
