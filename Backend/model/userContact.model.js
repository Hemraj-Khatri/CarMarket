import mongoose from "mongoose";

const userContactModel = new mongoose.Schema({
    name:{
        type:String, 
        required: true,
    }, 
    email: {
        type: String, 
        requird: true, 
    }, 
    phone: {
        type: Number, 
        required: true, 

    }, 
    message:{

        type: String, 
        required:true,
    },
},

{timestamps:true});
export const userContact = mongoose.model("userContact", userContactModel);