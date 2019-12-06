/* Initial State */
const INITIAL_STATE = {
  books: [{ title: "A" }, { title: "B" }, { title: "C" }],
  pending: false
};

export const booksReducer = (state = INITIAL_STATE, action) => {
  console.log("action", action.type);
  switch (action.type) {
    case "ADD_DUMMY":
      return {
        books: state.books.concat({ title: "DUMMY BOOK" })
      };
    case "FETCH_BOOK_LIST_PENDING":
      console.log("state", state);
      return {
        ...state,
        pending: true
      };
    case "FETCH_BOOK_LIST_SUCCESS":
      console.log("state", state);
      return {
        ...state,
        books: action.books,
        pending: false
      };
    default:
      return state;
  }
};
