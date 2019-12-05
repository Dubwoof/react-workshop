import React from "react";
import { BookItem } from "../components/BookItem";

export const BookList = () => {
  const books = [{ title: "A" }, { title: "B" }, { title: "C" }];

  return books.map((item, index) => {
    return <BookItem key={index} item={item} />;
  });
};
