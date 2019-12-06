import React from "react";
import "./App.css";
import BookList from "./container/BookList";
import { BookDetails } from "./container/BookDetails";
import { Route, Link, Switch } from "react-router-dom";

// const onClickHandler = () => {};

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link>| ...
    </nav>
    <Switch>
      <Route exact path="/" component={BookList} />
      <Route path="/book/:isbn" component={BookDetails} />
    </Switch>
  </>
);

export default App;
