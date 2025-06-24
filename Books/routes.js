import * as dao from "./dao.js";

export default function BookRoutes(app) {
    app.get("/api/books", async (req, res) => {
        const books = await dao.getAllBooks();
        res.json(books);
    });
    app.post("/api/books", async (req, res) => {
        const existing = await dao.findBookById(req.body.googleBooksId);
        if (existing) {
            return res.json(existing);
        }
        const book = await dao.addBook(req.body);
        res.json(book);
    });
    app.get("/api/books/:googleBooksId", async (req, res) => {
        const book = await dao.findBookById(req.params.googleBooksId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    });
}