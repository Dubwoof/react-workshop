import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBook, persistBook } from "../redux/booksActions";

export const BookForm = ({ fetchBookByIsbn, match, book, writeBook }) => {
  useEffect(() => {
    fetchBookByIsbn(match.params.isbn);
  }, [fetchBookByIsbn, match.params.isbn]);

  const [tempBook, setTempBook] = useState(book);

  const onChange = event => {
    setTempBook({
      ...book,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    console.log("hit save button", tempBook);
    event.preventDefault();
    console.log("temp book", tempBook);
    writeBook(tempBook);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={tempBook.title}
            onChange={onChange}
          />
          <br />
          Subtitle:
          <input
            name="subtitle"
            type="text"
            value={tempBook.subtitle}
            onChange={onChange}
          />
          <br />
          <span role="img" aria-label="submitLabel" onClick={handleSubmit}>
            💾
          </span>
        </label>
        <br />
      </form>
    </>
  );
};

// define state & dispatch method for connect
const mapStateToProps = state => ({
  book: state.book,
  pending: state.pending
});

const mapDispatchToProps = dispatch => {
  return {
    fetchBookByIsbn: isbn => {
      console.log("isbn", isbn);
      return dispatch(fetchBook(isbn));
    },
    writeBook: tempBook => {
      console.log(tempBook);
      dispatch(persistBook(tempBook));
    }
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
