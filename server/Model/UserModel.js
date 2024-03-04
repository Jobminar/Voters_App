import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  notifications: { type: [String], required: true, default: [] },
  _id: { type: String, required: true },
});

const User = model('User', userSchema);

export default User;
