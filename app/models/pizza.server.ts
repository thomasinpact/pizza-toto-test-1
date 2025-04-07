import { Schema, model } from 'mongoose';

const pizzaSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image_url: { type: String }
}, { timestamps: true });

export const Pizza = model('Pizza', pizzaSchema);
