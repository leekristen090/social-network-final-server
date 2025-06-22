import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export const findUserGoals = (userId) => {
    const {goals} = db;
    return goals.filter((goal) => goal.user === userId);
};
export const createGoal = (goal) => {
    const newGoal = {...goal, _id: uuidv4()};
    db.goals = [...db.goals, newGoal];
    return newGoal;
};
export const updateGoal = (goalId, goalUpdates) => {
    const {goals} = db;
    const goal = goals.find((g) => g._id === goalId);
    Object.assign(goal, goalUpdates);
    return goal;
};
export const deleteGOal = (goalId) => {
    const {goals} = db;
    db.goals = db.goals.filter((goal) => goal._id !== goalId);
};