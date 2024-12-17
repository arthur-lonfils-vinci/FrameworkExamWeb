/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

export interface Book {
  id: number;
  title: string;
  year: string;
  author: string;
  image: string;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}
