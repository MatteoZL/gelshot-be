import { Schema, model } from "mongoose";

const productSchema = new Schema({
  type: {
    type: String,
    required: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  drink: {
    type: String,
    required: true,
    lowercase: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model("Product", productSchema);
