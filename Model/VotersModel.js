import { Schema,model } from "mongoose"

const userSchema=new Schema({
    AC_NO:{type:String,required:true},
    PART_NO:{type:String,required:true},
    SLNO:{type:String,required:true},
    SECTION_NO:{type:String,required:true},
    EPIC_NO:{type:String,required:true},
    Elector_Name:{type:String,required:true},
    Elector_Name_Tel:{type:String,required:true},
    SEX:{type:String,required:true},
    AGE:{type:Number,required:true},
    DOB:{type:String,required:false},
    RELATION_TYPE:{type:String,required:true},
    Relation_Name:{type:String,required:true},
    Relation_Name_Tel:{type:String,required:true},
    H_NO:{type:String,required:false},
    STREET_AREA:{type:String,required:false},
    VILLAGE:{type:String,required:false},
    POST_OFFICE:{type:String,required:false},
    VILLAGE_Tel:{type:String,required:false},
    STREET_AREA_Tel:{type:String,required:false},
    POST_OFFICE_Tel:{type:String,required:false},
    PIN_CODE:{type:String,required:false},
    MOBILE_NO:{type:String,required:false}

})
const Voters=model("Voters",userSchema)
export default Voters