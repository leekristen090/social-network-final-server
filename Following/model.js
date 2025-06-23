import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("FollowingModel", schema);
export default model;