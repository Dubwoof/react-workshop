import React from "react";
import { Link } from "react-router-dom";

export const BookItem = ({ item, index }) => {
  return (
    <Link to={`/book/${item.isbn}`}>
      <div>
        {index + 1} {item.title}
      </div>
    </Link>
  );
};
