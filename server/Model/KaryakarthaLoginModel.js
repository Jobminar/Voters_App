import { Schema, model } from "mongoose";

const karyakarthaschema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  verified: { type: Boolean, default: true },
  area: { type: String, required: true },
  lead: { type: String, required: true },
  assembly: { type: String, required: true },
  parlament: { type: String, required: true },
});
const Karyakartha = model("Karyakartha", karyakarthaschema);
export default Karyakartha;
