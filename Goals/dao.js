import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export const findUserGoals = async (userId) => {
    const {goals} = db;
    return goals.filter((goal) => goal.user === userId);
};
export const createGoal = async (goal) => {
    const newGoal = {...goal, _id: uuidv4()};
    db.goals = [...db.goals, newGoal];
    return newGoal;
};
export const updateGoal = async (goalId, goalUpdates) => {
    const {goals} = db;
    const goal = goals.find((g) => g._id === goalId);
    Object.assign(goal, goalUpdates);
    return goal;
};
export const deleteGOal = async (goalId) => {
    //const {goals} = db;
    db.goals = db.goals.filter((goal) => goal._id !== goalId);
};