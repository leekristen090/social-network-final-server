import mongoose from "mongoose";
const goalSchema = new mongoose.Schema({
    _id: String,
    user: {type: String, ref: "UserModel"},
    goalDescription: String,
    percentage: String,
    }, {collection: "goals"}
);
export default goalSchema;