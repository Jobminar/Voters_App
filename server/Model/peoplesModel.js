import { Schema, model } from "mongoose";

const peopleSchema = new Schema({
    EPIC_NUMBER: { type: String, required: true },
    SNO: { type: String, required: true },
    PARTNO: { type: String, required: true },
    PARTY: { type: String, required: true },
    SUB_CASTE: { type: String, required: true },
    GENDER: { type: String, required: true },
    AGE: { type: String, required: true },
    RELATION: { type: String, required: true },
    ST: { type: String, required: true },
    VOTER_NAME: { type: String, required: true },
    SURNAME: { type: String, required: true },
    GAURDIEN: { type: String, required: true },
    VSNO: { type: String, required: true },   
    VillAGE:{type:String,required:true},
    SNOP:{type:String,required:true},
    H_NO:{type:String,required:true},
    R_TYPE:{type:String,required:true}
  
});

const People = model("People", peopleSchema);

export default People;
