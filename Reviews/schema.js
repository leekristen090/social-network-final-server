import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    _id: String,
    bookId: String,
    bookTitle: String,
    userId: {type: String, ref: "UserModel", required: true},
    text: String,
    timestamp: Date,
    }, {collection: "reviews"}
);
export default reviewSchema;