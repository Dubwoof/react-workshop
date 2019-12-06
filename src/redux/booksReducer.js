/* Initial State */
const INITIAL_STATE = {
  books: [{ title: "A" }, { title: "B" }, { title: "C" }],
  book: {},
  pending: false,
  event: null
};

export const booksReducer = (state = INITIAL_STATE, action, event) => {
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
    case "FETCH_BOOK_PENDING":
      console.log("state", state);
      return {
        ...state,
        pending: true
      };
    case "FETCH_BOOK_SUCCESS":
      console.log("state", state);
      return {
        ...state,
        book: action.book,
        pending: false
      };
    default:
      return state;
  }
};
