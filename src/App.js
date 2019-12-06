import React from "react";
import "./App.css";
import BookList from "./container/BookList";
import BookDetails from "./container/BookDetails";
import BookForm from "./container/BookForm";
import { Route, Link, Switch } from "react-router-dom";

// const onClickHandler = () => {};

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link>| ...
    </nav>
    <Switch>
      <Route exact path="/" component={BookList} />
      <Route exact path="/book/:isbn" component={BookDetails} />
      <Route exact strict path="/book/:isbn/edit" component={BookForm} />
    </Switch>
  </>
);

export default App;
