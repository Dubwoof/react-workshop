import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BookItem } from "../components/BookItem";
import { AddButton } from "../components/AddButton";

export const BookList = ({ books, addBook }) => {
  /*   useEffect(() => {
    fetch("http://localhost:4730/books", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(json => setBooks(json));
  }, []); */

  return (
    <>
      <AddButton func={addBook} />
      <button onClick={addBook}>add Book</button>
      {books.map((item, index) => {
        return <BookItem key={index} item={item} />;
      })}
    </>
  );
};

// action creator
const addDummyBook = () => {
  return { type: "ADD_DUMMY" };
};

// define state & dispatch method for connect
const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => {
  return {
    addBook: () => {
      return dispatch(addDummyBook());
    }
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
