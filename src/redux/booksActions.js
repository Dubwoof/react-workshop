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

export const fetchBookPending = () => {
  return { type: "FETCH_BOOK_PENDING" };
};

export const fetchBookSuccess = json => {
  return { type: "FETCH_BOOK_SUCCESS", book: json };
};

export function fetchBook(isbn) {
  console.log("fetchbook isbn", isbn);
  return dispatch => {
    dispatch(fetchBookPending(isbn));

    return fetch(`http://localhost:4730/books/${isbn}`)
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        dispatch(fetchBookSuccess(json));
      })
      .catch(e => console.log(e));
  };
}

export function persistBook(book) {
    console.log("persistbook isbn", book);
    return dispatch => {
  
        const request = new Request(`http://localhost:4730/books/${book.isbn}`, {
        headers: {
                'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method : 'PUT',
        body   : JSON.stringify(book)
    });

      return fetch(request);
    }
}
