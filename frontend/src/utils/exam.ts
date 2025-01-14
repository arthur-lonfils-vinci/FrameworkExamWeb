

// UPDATE THE NAME OF THE VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Books/Book/book -> with the exam variables name


import { Book } from "../types/exam";
import { AuthenticatedUser } from "../types/users";

export const fetchBooks = async (authenticatedUser: AuthenticatedUser): Promise<Book[]> => {
  try {
    const response = await fetch("/api/books", { // UPDATE THE PATH !!!!!!!!!!!!!!!!
      method: "GET",
      headers: {
        Authorization: authenticatedUser.token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch books : " + response.statusText);
    }
    const data = await response.json();
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchBookById = async (id: number, authenticatedUser: AuthenticatedUser): Promise<Book> => {
  try {
    const response = await fetch(`/api/books/${id}`, { // UPDATE THE PATH !!!!!!!!!!!!!!!!
      method: "GET",
      headers: {
        Authorization: authenticatedUser.token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch book : " + response.statusText);
    }
    const data = await response.json();
    if (!data) {
      throw new Error("Invalid data");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};