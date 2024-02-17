
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    message: { type: String, required: true, trim: true, maxlength: 255 }, // Example: Added trim and maxlength
});

const User = model("User", userSchema);

export default User;
