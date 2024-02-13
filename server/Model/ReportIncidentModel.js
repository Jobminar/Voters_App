import { Schema,model } from "mongoose";

const reportIncidentSchema=new Schema({
    incident:{type:String,required:true},
    message:{type:String,required:true},
    image:{type:String,required:true}
})
const ReportIncident=model("ReportIncident",reportIncidentSchema)
export default ReportIncident