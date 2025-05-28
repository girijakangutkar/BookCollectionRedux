const initialState = [];
function BookReducer(state = initialState, action) {
  switch (action.type) {
    case "AddBook":
      return [...state, action.payload];
    case "DeleteBook":
      return state.filter((book) => book.id !== action.payload.id);
    case "MarkAsRead":
      return state.map((book) =>
        book.id === action.payload.id
          ? { ...book, readStatus: !book.readStatus }
          : book
      );

    case "EditBook":
      return state.map((book) =>
        book.id === action.payload.id
          ? {
              ...book,
              title: action.payload.newTitle,
              author: action.payload.newAuthor,
              genre: action.payload.newGenre,
            }
          : book
      );

    default:
      return state;
  }
}

export default BookReducer;
