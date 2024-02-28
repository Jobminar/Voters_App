import { Schema,model } from "mongoose"

const locationSchema=new Schema({
    longitude:{type:String,required:true},
    latitude:{type:String,required:true},
    userId:{type:String,required:true}
})
const Location=model("Location",locationSchema)
export default Location