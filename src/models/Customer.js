import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 4,
  },
  lastname: {
    type: String,
    required: true,
    min: 4,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  number: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

export default model("Customer", userSchema);
