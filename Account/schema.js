import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    firstName: String,
    lastName: String,
    role: {
        type: String,
        enum: ["READER", "AUTHOR", "ADMIN"],
        default: "READER",
    },
    bio: String,
    dob: Date,
                                       }, {collection: "users"}
);
export default userSchema;