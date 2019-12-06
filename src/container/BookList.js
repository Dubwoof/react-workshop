import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BookItem } from "../components/BookItem";
import { AddButton } from "../components/AddButton";
import { addDummyBook, fetchBookList } from "../redux/booksActions";

import { BulletList } from "react-content-loader";

const MyBulletListLoader = () => <BulletList />;

export const BookList = ({ books, addBook, fetchBooks, pending }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <AddButton func={addBook} />
      {pending && <MyBulletListLoader />}
      {books.map((item, index) => {
        return <BookItem key={index} item={item} />;
      })}
    </>
  );
};

// define state & dispatch method for connect
const mapStateToProps = state => ({
  books: state.books,
  pending: state.pending
});

const mapDispatchToProps = dispatch => {
  return {
    addBook: () => {
      return dispatch(addDummyBook());
    },
    fetchBooks: () => {
      return dispatch(fetchBookList());
    }
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
