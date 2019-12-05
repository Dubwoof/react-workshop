import React, { useEffect, useState } from "react";
import { BookItem } from "../components/BookItem";

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4730/books", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(json => setBooks(json));
  }, []);

  return books.map((item, index) => {
    return <BookItem key={index} item={item} />;
  });
};
