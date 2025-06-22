import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export const findAllReviews = async ()  => db.reviews;
export const findUserReviews = async (userId) => {
    //const {reviews} = db;
    return db.reviews.filter((r) => r.userId === userId);
};
export const findReviewsForBook = async (bookId) => {
    return db.reviews.filter((r) => r.bookId === bookId);
};
export const createReview = async (review) => {
    const newReview = {...review, _id: uuidv4(), timestamp: new Date().toISOString()};
    db.reviews = [...db.reviews, newReview];
    return newReview;
};
export const updateReview = async (reviewId, reviewUpdates) => {
    const {reviews} = db;
    const review = reviews.find((r) => r._id === reviewId);
    Object.assign(review, reviewUpdates);
    return review;
};
export const deleteReview = async (reviewId) => {
    db.reveiws = db.reviews.filter((r) => r._id !== reviewId);
};