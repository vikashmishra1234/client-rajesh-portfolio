import mongoose, { Document, Schema, Model, model, models } from 'mongoose';


interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User: Model<IUser> = models.User || model<IUser>('User', userSchema);

export default User;
