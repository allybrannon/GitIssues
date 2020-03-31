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
      <div>
        <h3>
          {issues.length > 0 ? (
            issues.map(issue => <IssueDetail issue={issue} key={issue.id} />)
          ) : (
            <p>Empty</p>
          )}
        </h3>
      </div>
    );
  }
}
export default IssueList;
