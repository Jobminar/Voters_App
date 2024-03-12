import {Schema,model} from 'mongoose'

const messageSchema=new Schema({
    message : {type:String,required:true},
    phoneNo:{type:Number,required:true}
    
})
const Message=model("Message",messageSchema)
export default Message