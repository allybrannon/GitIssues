import React, { Component } from "react";
import IssueDetail from "./IssueDetail.jsx";

class IssueList extends Component {
  state = {
    issues: []
  };

  componentDidMount() {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then(response => response.json())
      .then(result => {
        this.setState({
          issues: result
        });
      });
  }

  render() {
    const { issues } = this.state;
    return (
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            {issue.title}
            <br />
            <a href={`/issue/${issue.number}`}>View Issue Details</a>
          </li>
        ))}
      </ul>
    );
  }
}
export default IssueList;
