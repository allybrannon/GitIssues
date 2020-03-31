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
      <h4>
        {issues.map(issue => (
          <p key={issue.id}>
            {issue.title}
            <br />
            {issue.created_at}
            <br />
            <a href={`/issue/${issue.number}`}>View Issue Details</a>
          </p>
        ))}
      </h4>
    );
  }
}
export default IssueList;
