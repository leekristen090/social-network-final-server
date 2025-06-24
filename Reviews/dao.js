import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAllReviews = async ()  => model.find();
export const findUserReviews = async (userId) => {
    //const {reviews} = db;
    //return db.reviews.filter((r) => r.userId === userId);
    return model.find({userId: userId});
};
// export const findUserReviews = async (userId) => {
//     console.log("Searching for reviews by user:", userId); // Debug log
//     const result = await model.find({ user: userId })
//         .populate("user", "username _id")
//         .lean();
//     console.log("Found reviews:", result); // Debug log
//     return result;
// };
export const findReviewsForBook = async (bookId) => {
    //return db.reviews.filter((r) => r.bookId === bookId);
    return model.find({bookId: bookId});
};
// export const createReview = async (review, userId) => {
//     const newReview = {...review, _id: uuidv4(), userId: userId, timestamp: new Date().toISOString()};
//     // db.reviews = [...db.reviews, newReview];
//     // return newReview;
//     return model.create(newReview);
// };
export const createReview = async (review) => {
    const newReview = {
        ...review,
        _id: uuidv4(),
        timestamp: new Date().toISOString(),
        bookTitle: review.bookTitle || "Unknown Book",
    };
    return model.create(newReview);
};
export const updateReview = async (reviewId, reviewUpdates) => {
    // const {reviews} = db;
    // const review = reviews.find((r) => r._id === reviewId);
    // Object.assign(review, reviewUpdates);
    // return review;
    await model.updateOne({_id: reviewId}, reviewUpdates);
    return model.findById(reviewId);
};
export const deleteReview = async (reviewId) => {
    // db.reveiws = db.reviews.filter((r) => r._id !== reviewId);
    return model.deleteOne({_id: reviewId});
};