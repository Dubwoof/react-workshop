import React from "react";
import { connect } from "react-redux";

export const BookDetails = ({ books, match }) => {
  return (
    <>
      <div>{match.params.id}</div>
    </>
  );
};

// define state & dispatch method for connect
const mapStateToProps = state => ({
  books: state.books,
  pending: state.pending
});

const mapDispatchToProps = dispatch => {
  return {};
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
