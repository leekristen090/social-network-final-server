import model from "./model.js";

export const findBookById = (googleBooksId) => model.findOne({ googleBooksId });
export const addBook = (book) => model.create(book);
export const getAllBooks = () => model.find();
export const searchBooksByTitle = (title) => model.find({ title: new RegExp(title, 'i') });