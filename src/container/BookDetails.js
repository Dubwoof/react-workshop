import React from "react";
import { connect } from "react-redux";

export const BookDetails = ({ book, match }) => {
  return (
    <>
      {book ? <div></div> : <div>books is undefined</div>}
      <div>{match.params.isbn}</div>
    </>
  );
};

// define state & dispatch method for connect
const mapStateToProps = state => ({
  book: state.book,
  pending: state.pending
});

const mapDispatchToProps = dispatch => {
  return {};
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
