import React from "react";
import { BookItem } from "../components/BookItem";
import ReactTestRenderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";

const book = { title: "My Title" };

describe("A BookListItem component", function() {
  it("renders a book item correctly", () => {
    const tree = ReactTestRenderer.create(
      <Router>
        <BookItem item={book} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
