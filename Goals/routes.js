import * as dao from "./dao.js";

export default function GoalRoutes(app) {
    app.get("/api/goals/:userId", (req, res) => {
        const {userId} = req.params;
        const goals = dao.findUserGoals(userId);
        res.json(goals);
    });
    app.post("/api/goals", (req, res) => {
        const newGoal = dao.createGoal(req.body);
        res.json(newGoal);
    });
    app.put("/api/goals/:goalId", (req, res) => {
        const {goalId} = req.params;
        const goalUpdates = req.body;
        const update = dao.updateGoal(goalId, goalUpdates);
        res.json(update);
    });
    app.delete("/api/goals/:goalId", (req, res) => {
        const {goalId} = req.params;
        const status = dao.deleteGOal(goalId);
        res.send(status);
    });
}