import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phone: Number
});
const userModel = new mongoose.model("UserModel", userScheme);

export default userModel;