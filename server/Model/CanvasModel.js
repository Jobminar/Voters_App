import { Schema,model } from "mongoose"

const canvasSchema=new Schema({
    name:{type:String,required:true},
    fatherName:{type:String,required:true},
    MotherName:{type:String,required:true},
    houseNo:{type:String,required:true},
    colony:{type:String,required:true},
    villageDivision:{type:String,required:true},
    occupation:{type:String,required:true},
    noOfVoter:{type:String,required:true},
    noOfMigratedVoters:{type:String,required:true},
    cast:{type:String,required:true},
    category:{type:String,required:true},
    religion:{type:String,required:true},
    comments:{type:String,required:true},
    image:{type:String,required:true}
})
const Canvas=model("Canvas",canvasSchema)
export default Canvas