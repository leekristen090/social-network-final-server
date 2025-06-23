import * as dao from "./dao.js";

export default function FollowingRoutes(app) {
    app.get("/api/following/:userId", async (req, res) => {
        const {userId} = req.params;
        const followingList = await dao.findFollowingForUser(userId);
        res.json(followingList);
    });
    app.post("/api/following", async (req, res) => {
        const { userId, targetId } = req.body;
        const newFollow = await dao.followUser(userId, targetId);
        res.json(newFollow);
    });
    app.delete("/api/following", async (req, res) => {
        const { userId, targetId } = req.body;
        const success = await dao.unfollowUser(userId, targetId);
        if (success) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    });
}
