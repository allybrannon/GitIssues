import React, { Component } from "react";
import Issue from "./Issue.jsx";

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
      <div>
        <p>
          {issues.length > 0 ? (
            issues.map(issue => <Issue issue={issue} key={issue.id} />)
          ) : (
            <h3>Empty</h3>
          )}
        </p>
      </div>
    );
  }
}
export default IssueList;
