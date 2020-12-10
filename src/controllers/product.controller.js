import Product from "../models/Product";
import cloudinary from '../libs/cloudinary';

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

export const createProduct = async (req, res) => {
  try {
    const { type, name, description, drink, price } = req.body,
      photo = await cloudinary(req.files.photo.tempFilePath),
      product = new Product({
	type,
        name,
	description,
	drink,
        photo,
	price
      });
    await product.save();
    res.status(200).json({
      message: "Product saved successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.typeId,
      { name, type, description, drink, price } = req.body;
    if (req.files) {
      const photo = await cloudinary(req.files.photo.tempFilePath),
	updatedProduct = await Product.findByIdAndUpdate(
	  id,
	  { name, type, description, drink, price, photo },
	  { new: true }
      );
      res.status(200).json({
        message: "Product updated successfully",
        updatedProduct,
      });
    } else {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
	{ name, type, description, drink, price },
        { new: true }
      );
      res.status(200).json({
        message: "Product updated successfully",
        updatedProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.typeId;
    await Product.findByIdAndRemove(id);
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const productsByTypeOrId = async (req, res) => {
  try {
    let product = await Product.find({type: req.params.typeId}).sort('name');
    if(product.length == 0) {
      product = await Product.findById(req.params.typeId); 
    }
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
