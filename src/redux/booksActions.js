// action creator
export const addDummyBook = () => {
  return { type: "ADD_DUMMY" };
};

export const fetchBookListPending = () => {
  return { type: "FETCH_BOOK_LIST_PENDING" };
};

export const fetchBookListSuccess = json => {
  return { type: "FETCH_BOOK_LIST_SUCCESS", books: json };
};

export function fetchBookList() {
  return dispatch => {
    dispatch(fetchBookListPending());

    return fetch(`http://localhost:4730/books`)
      .then(response => response.json())
      .then(json => {
        
        dispatch(fetchBookListSuccess(json));
      })
      .catch(e => console.log(e));
  };
}
