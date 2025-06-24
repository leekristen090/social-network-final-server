import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
                                           googleBooksId: { type: String, required: true, unique: true },
                                           title: String,
                                           authors: String,
                                           description: String,
                                           coverURL: String,
                                       }, { timestamps: true });
export default bookSchema;