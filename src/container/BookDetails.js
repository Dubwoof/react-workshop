import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBook } from "../redux/booksActions";

export const BookDetails = ({ book, match, fetchBookByIsbn }) => {
  useEffect(() => {
    fetchBookByIsbn(match.params.isbn);
  }, [fetchBookByIsbn, match.params.isbn]);

  return (
    <>
      {book ? <div>{book.title}</div> : <div>book is undefined</div>}
      <div>{match.params.isbn}</div>
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
    }
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
