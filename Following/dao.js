import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export async function followUser(userId, targetId) {
    const {following} = db.following;
    const newFollowing = { _id: uuidv4(), user: userId, target: targetId};
    following.push(newFollowing);
    return newFollowing;
}
export async function unfollowUser(userId, targetId) {
    const {following} = db.following;
    const initialLength = following.length;
    db.following = following.filter(f => !(f.user === userId && f.target === targetId));
    return initialLength !== db.following.length;
}
export async function findFollowingForUser(userId) {
    return db.following.filter(f => f.user === userId);
}
