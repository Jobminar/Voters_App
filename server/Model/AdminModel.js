import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    message: { type: String, required: true, trim: true, maxlength: 255 }, // Example: Added trim and maxlength
});

const Admin = model("Admin", adminSchema);

export default Admin;
