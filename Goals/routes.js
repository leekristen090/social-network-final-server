import * as dao from "./dao.js";

export default function GoalRoutes(app) {
    app.get("/api/goals/:userId", async (req, res) => {
        const {userId} = req.params;
        const goals = await dao.findUserGoals(userId);
        res.json(goals);
    });
    app.post("/api/goals", async (req, res) => {
        const newGoal = await dao.createGoal(req.body);
        res.json(newGoal);
    });
    app.put("/api/goals/:goalId", async (req, res) => {
        const {goalId} = req.params;
        const goalUpdates = req.body;
        const update = await dao.updateGoal(goalId, goalUpdates);
        res.json(update);
    });
    app.delete("/api/goals/:goalId", async (req, res) => {
        const {goalId} = req.params;
        const status = await dao.deleteGOal(goalId);
        res.send(status);
    });
}