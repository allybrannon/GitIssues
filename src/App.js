import React from "react";
import IssueList from "./components/IssueList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Issues</h1>
        <IssueList />
      </header>
    </div>
  );
}

export default App;
