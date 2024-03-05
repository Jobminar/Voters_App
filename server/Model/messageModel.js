import {Schema,model} from 'mongoose'

const messageSchema=new Schema({
    message : {type:String,required:true},
    username:{type:String,required:true},
    
})
const Message=model("Message",messageSchema)
export default Message