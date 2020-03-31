import React, { Component } from "react";

class IssueDetail extends Component {
  state = {
    issue_number: []
  };
  componentDidMount() {
    const { issue_number } = this.props.match.params;
    fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    ).then(issue_number => {
      this.setState({
        issue_number
      });
    });
  }

  render() {
    return (
      <div>
        <p>Did i do it?</p>
      </div>
    );
  }
}

export default IssueDetail;
