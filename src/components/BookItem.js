import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookItem.module.scss";

export const BookItem = ({ item, index }) => {
  return (
    <>
      <Link to={`/book/${item.isbn}`}>
        <div>
          {index + 1} {item.title}
        </div>
      </Link>
      <Link to={`/book/${item.isbn}/edit`} className={styles.noDecoration}>
        ✎
      </Link>
    </>
  );
};
