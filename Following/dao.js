import model from "./model.js";

export function followUser(userId, targetId) {
    const newFollowing = {_id: `${userId}-${targetId}`, user: userId, target: targetId};
    return model.create(newFollowing);
}
export async function unfollowUser(userId, targetId) {
    return model.deleteOne({ user: userId, target: targetId });
}
// export async function findFollowingForUser(userId) {
//     const following = await model.find({user: userId}).populate("target");
//     return following.map((f) => f.target);
//     // return model.find({ user: userId }).populate("target");
// }
export async function findFollowingForUser(userId) {
    return model.find({ user: userId })
        .populate("target", "username _id")
        .lean()
        .exec();
}
