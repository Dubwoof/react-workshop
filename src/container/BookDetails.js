import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBook } from "../redux/booksActions";

import { Instagram } from "react-content-loader";

const MyBulletListLoader = () => <Instagram />;

export const BookDetails = ({ book, match, fetchBookByIsbn, pending }) => {
  useEffect(() => {
    fetchBookByIsbn(match.params.isbn);
  }, [fetchBookByIsbn, match.params.isbn]);

  return (
    <>
      {pending && <MyBulletListLoader className="loader" />}
      {book ? (
        <div>
          {book.title}
          <br />
          {book.subtitle}
          <br />
          <br />
          {book.abstract}
          <br />
          <br />
          {book.isbn}
        </div>
      ) : (
        <>
          <div>book is undefined</div>
          <div>url param: {match.params.isbn}</div>
        </>
      )}
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
