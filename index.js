import express from 'express';
import cors from "cors";
import AccountRoutes from "./Account/routes.js";
import Hello from "./Hello.js";
import session from "express-session";
import "dotenv/config";
import GoalRoutes from "./Goals/routes.js";
import ReviewRoutes from "./Reviews/routes.js";
import FollowingRoutes from "./Following/routes.js";
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:5173",
    }
));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "goodbooks",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
AccountRoutes(app);
GoalRoutes(app);
ReviewRoutes(app);
FollowingRoutes(app);
Hello(app);
app.listen(4000);