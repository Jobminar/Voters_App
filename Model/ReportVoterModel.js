import { Schema ,model} from "mongoose"

const reportVoters=new Schema({
    houseNumber:{type:String,required:true},
    pointOfContact:{type:Number,required:true},
    numberOfVoters:{type:Number,required:true},
    contactDetails:{type:Number,required:true},
    comments:{type:String,required:true},
    selectIssue:{type:String,required:true}
})
const Reportvoters=model("Reportvoter",reportVoters)
export default Reportvoters