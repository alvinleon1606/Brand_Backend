import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  comparePassword: (userpassword: string) => boolean;
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.comparePassword = async function (userpassword: string) {
  return await bcrypt.compare(userpassword, this.password);
};

const Users = mongoose.model("Users", userSchema);

export default Users;