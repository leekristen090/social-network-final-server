import mongoose from "mongoose";
const followingSchema = new mongoose.Schema({
    _id: String,
    user: {type: String, ref: "UserModel", required: true},
    target: {type: String, ref: "UserModel", required: true}
                                            }, {collection: "following"}
);
export default followingSchema;