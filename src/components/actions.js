export const addBook = (title, author, genre) => {
  return {
    type: "AddBook",
    payload: { title, author, genre, readStatus: false, id: Date.now() },
  };
};

export const DeleteBook = (id) => {
  return { type: "DeleteBook", payload: { id } };
};

export const editBook = (id, newTitle, newAuthor, newGenre) => {
  return {
    type: "EditBook",
    payload: { id, newTitle, newAuthor, newGenre },
  };
};

export const markAsRead = (id) => {
  return { type: "MarkAsRead", payload: { id } };
};
