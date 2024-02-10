import { Schema,model } from "mongoose"

const karyakarthaschema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String,required:true}
})
const Karyakartha=model("Karyakartha",karyakarthaschema)
export default Karyakartha

