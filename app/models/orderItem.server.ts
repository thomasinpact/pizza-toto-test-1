import { Schema, model } from 'mongoose';

const orderItemSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  pizza_id: { type: Schema.Types.ObjectId, ref: 'Pizza', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

export const OrderItem = model('OrderItem', orderItemSchema);
