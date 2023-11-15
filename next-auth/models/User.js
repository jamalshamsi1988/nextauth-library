import { Schema,model,models } from "mongoose";

const userSchema = new Schema({
    email:{
        type : String,
        required:true,
    },
    password :{
        type : String,
        required:true,
    },
    name :{
        type :String,
    },
    lastName:{
        type :String,
    },
    createAt :{
        type :Date,
        default :()=> Date.now(),
        immutable :true,
    },
});

const User = models.User || model("user" , userSchema);

export default User;