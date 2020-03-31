import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IssueList from "./components/IssueList";
import IssueDetail from "./components/IssueDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Issues from Github</h1>
      <Router>
        <Route path="/" exact component={IssueList} />
        <Route path="/issue/:issue_number" component={IssueDetail} />
      </Router>
    </div>
  );
}

export default App;
