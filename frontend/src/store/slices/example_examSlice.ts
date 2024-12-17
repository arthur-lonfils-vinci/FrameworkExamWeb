/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { Book, BooksState } from "../../types/example_exam";

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

// Async thunk to fetch books
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await api.get("/books") as { data: Book[] };
  return response.data;
});

// Async thunk to add a book
export const addBook = createAsyncThunk(
  "books/addBook",
  async (newBook: Omit<Book, "id">) => {
    const response = await api.post("/books", newBook);
    return response.data;
  }
);

// Async thunk to delete a book
export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId: number) => {
    await api.delete(`/books/${bookId}`);
    return bookId;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch books";
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
