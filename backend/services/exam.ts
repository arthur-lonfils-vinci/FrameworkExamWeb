
// UPDATE THE NAME OF THE VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Books/Book/book -> with the exam variables name

import path from "node:path";
import { Book, NewBook } from "../types";
import { parse, serialize } from "../utils/json";

//CHANGE
const jsonDbPath = path.join(__dirname, "/../data/books.json");

//CHANGE ALL THE VALUES (UPDATE THE JSON FILE => ('../data/exam.json'))
const defaultBooks: Book[] = [
  {
    id: 1,
    title: "L'étoile Jaune",
    author: "Joseph Juif",
    creationDate: "2021-10-01",
    image: "https://www.google.com",
  },
];



//CHANGE
export function readAllBooks(order: string | undefined): Book[] {
  const orderByTitle = order && order.includes("title") ? order : undefined;

  let orderedMenu: Book[] = [];
  const books = parse(jsonDbPath, defaultBooks);
  if (orderByTitle)
    orderedMenu = [...books].sort((a, b) => a.title.localeCompare(b.title));

  if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();

  return orderedMenu.length === 0 ? books : orderedMenu;
}

//CHANGE
export function readBookById(id: number): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  return books.find((book) => book.id === id);
}

//CHANGE
export function createBook(newBook: NewBook): Book {
  const books = parse(jsonDbPath, defaultBooks);
  const lastId = books[books.length - 1].id;
  const book: Book = { id: lastId + 1, ...newBook };
  const updatedBooks = [...books, book];
  serialize(jsonDbPath, updatedBooks);
  return book;
}

//CHANGE
export function deleteBook(id: number): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return undefined;

  const deletedElements = books.splice(index, 1);
  serialize(jsonDbPath, books);
  return deletedElements[0];
}

//CHANGE
export function updateBook(
  id: number,
  updatedBook: Partial<NewBook>
): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  const book = books.find((book) => book.id === id);
  if (!book) return undefined;

  if (updatedBook.title !== undefined) {
    book.title = updatedBook.title;
  }
  if (updatedBook.image !== undefined) {
    book.image = updatedBook.image;
  }

  serialize(jsonDbPath, books);
  return book;
}