import { Schema, model,models } from "mongoose";


const UserSchema = new Schema({
    name: String,
    email: String,
    age:Number,
    password:String
})
const User =models.user|| model("user", UserSchema);
module.exports = User;