import React, { Component } from "react";

class IssueDetail extends Component {
  state = {
    issueDetails: []
  };
  async componentDidMount() {
    const { issue_number } = this.props.match.params;
    const response = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    );
    const data = await response.json();
    this.setState({
      issueDetails: data
    });
  }

  render() {
    const { issueDetails } = this.state;
    return (
      <div>
        <p>{issueDetails.title}</p>
        <p>{issueDetails.body}</p>
      </div>
    );
  }
}

export default IssueDetail;
