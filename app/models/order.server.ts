import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['reçue', 'en préparation', 'prête', 'livrée'],
    default: 'reçue'
  }
}, { timestamps: true });

export const Order = model('Order', orderSchema);
