let nextBookId = 0;
export const addBook = book => ({
  type: "ADD_BOOK",
  id: nextBookId++,
  book
});
