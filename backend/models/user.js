import mongoose from "mongoose"

const USER = mongoose.model(
    "USER",
    mongoose.Schema({
        name:{
            type:String,
            required:false,
        },
        gender:{
            type:String,
            enum:["Male", "Female", "Other"],
        },
        email:{
            type:String,
            required:false
        }
    }),
    "USER"
);

export default USER;