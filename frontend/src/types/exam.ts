
// UPDATE THE NAME OF THE VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Books/Book/book -> with the exam variables name

export interface Book {
    id: number;
    title: string;
    author: string;
    creationDate: string;
    image?: string;
}

  
export type NewBook = Omit<Book, "id">;