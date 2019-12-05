/* Initial State */
const INITIAL_STATE = {
  books: [{ title: "A" }, { title: "B" }, { title: "C" }]
};

export const booksReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_DUMMY":
      return {
        books: state.books.concat({ title: "DUMMY BOOK" })
      };
    default:
      return state;
  }
};
