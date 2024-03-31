import { Schema, model } from "mongoose";
const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    age: Number,
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: "Male",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", UserSchema);
export default userModel;
