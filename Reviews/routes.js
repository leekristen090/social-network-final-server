import * as dao from "./dao.js";

export default function ReviewRoutes(app) {
    app.get("/api/reviews", async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    });
    app.get("/api/reviews/book/:bookId", async (req, res) => {
        const {bookId} = req.params;
        const reviews = await dao.findReviewsForBook(bookId);
        res.json(reviews);
    });
    app.get("/api/reviews/user/:userId", async (req, res) => {
        const {userId} = req.params;
        const reviews = await dao.findUserReviews(userId);
        res.json(reviews);
    });
    app.post("/api/reviews", async (req, res) => {
        const newReview = await dao.createReview(req.body);
        res.json(newReview);
    });
    app.put("/api/reviews/:reviewId", async (req, res) => {
        const {reviewId} = req.params;
        const reviewUpdates = req.body;
        const update = await dao.updateReview(reviewId, reviewUpdates);
        res.json(update);
    });
    app.delete("/api/reviews/:reviewId", async (req, res) => {
        const {reviewId} = req.params;
        const status = await dao.deleteReview(reviewId);
        res.json(status);
    });
}