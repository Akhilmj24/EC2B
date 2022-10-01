import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      //   required: true,
       
    },
    email: {
      type: String,
    //   required: true,
      unique: true,
      required: [true, "Please provide a valid email address."],
    },
   
    image: {
      type: String,
    },
    city: {
      type: String,
    //   required: true,
    },
    phone: {
      type: String,
    //   required: true,
    },
    gender: {
      type: String,
    //   required: true,
    },
    password: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    pincode: {
      type: String,
      // required: true,
    },
    landmark: {
      type: String,
      // required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);