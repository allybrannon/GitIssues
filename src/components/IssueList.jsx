import React, { Component } from "react";
import Issue from "./Issue.jsx";

class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    };
  }
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
            <li>Empty</li>
          )}
        </p>
      </div>
    );
  }
}
export default IssueList;
