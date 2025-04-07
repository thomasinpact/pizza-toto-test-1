import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  role: { type: String, enum: ['client', 'admin'], required: true }
}, { timestamps: true });

export const User = model('User', userSchema);
