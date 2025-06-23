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
    // app.get("/api/reviews/user/:userId", async (req, res) => {
    //     console.log("Request for user reviews:", req.params.userId); // Debug log
    //     const reviews = await dao.findUserReviews(req.params.userId);
    //     console.log("Returning reviews:", reviews); // Debug log
    //     res.json(reviews);
    // });
    // app.post("/api/reviews", async (req, res) => {
    //     const newReview = await dao.createReview(req.body);
    //     res.json(newReview);
    // });
    app.post("/api/reviews", async (req, res) => {
        try {
            // Validate required fields
            if (!req.body.bookId || !req.body.userId || !req.body.text) {
                return res.status(400).json({ message: "Missing required fields" });
            }

            const newReview = await dao.createReview(req.body);
            res.status(201).json(newReview);
        } catch (err) {
            console.error("Error creating review:", err);
            res.status(500).json({ message: "Internal server error" });
        }
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