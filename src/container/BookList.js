import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BookItem } from "../components/BookItem";
import { AddButton } from "../components/AddButton";
import { addDummyBook, fetchBookList } from "../redux/booksActions";

export const BookList = ({ books, addBook, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <AddButton func={addBook} />
      {books.map((item, index) => {
        return <BookItem key={index} item={item} />;
      })}
    </>
  );
};

// define state & dispatch method for connect
const mapStateToProps = state => ({ books: state.books });

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
