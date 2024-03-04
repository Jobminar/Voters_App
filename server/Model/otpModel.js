import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  phoneNo: { type: Number, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 30 }, // OTP expires after 1 minutes (adjust as needed)
});

const OTP = mongoose.model("OTP", otpSchema);

export default OTP;