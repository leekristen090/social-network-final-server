import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("GoalModel", schema);
export default model;