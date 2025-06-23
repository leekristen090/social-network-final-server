import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findUserGoals = async (userId) => {
    // const {goals} = db;
    // return goals.filter((goal) => goal.user === userId);
    return model.find({user: userId});
};
export const createGoal = async (goal) => {
    const newGoal = {...goal, _id: uuidv4()};
    //db.goals = [...db.goals, newGoal];
    //return newGoal;
    return model.create(newGoal);
};
export const updateGoal = async (goalId, goalUpdates) => {
    await model.updateOne({_id: goalId}, goalUpdates);
    return model.findById(goalId);
};
export const deleteGOal = async (goalId) => {
    //const {goals} = db;
    //db.goals = db.goals.filter((goal) => goal._id !== goalId);
    return model.deleteOne({_id: goalId});
};