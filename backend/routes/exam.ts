

// UPDATE THE NAME OF THE VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Books/Book/book -> with the exam variables name

import { Router } from "express";
import { createBook, deleteBook, readAllBooks, readBookById } from "../services/exam"; //CHANGE
import { authorize, isAdmin } from "../utils/auths";
import { NewBook } from "../types";

const router = Router();

router.get("/error", (_req, _res, _next) => {
  throw new Error("This is an error");
});

router.get("/", authorize, isAdmin, (req, res) => {
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }

  const books = readAllBooks(req.query.order);//CHANGE
  return res.json(books);//CHANGE
});


router.get("/:id", authorize, isAdmin, (req, res) => {
  const id = Number(req.params.id);
  const book = readBookById(id);//CHANGE
  if (!book) return res.sendStatus(404);
  return res.json(book);
});


// ROUTE ADD & DELETE IF needed

// Add a new book
router.post('/', (req, res) => {
  const newBook = req.body as NewBook;
  const newBookAdded = createBook(newBook);
  res.status(201).json(newBookAdded);
});

// Delete a book by id
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  deleteBook(bookId);
  res.status(204).send();
});

export default router;
