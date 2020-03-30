import React, { Component } from "react";

class IssueList extends Component {
  state = {
    issues: []
  };
  loadData = async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const data = await response.json();
    return data.results;
  };

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    });
  }
  render() {
    return (
      <div className="IssueList">
        <p> Issues!</p>
      </div>
    );
  }
}

export default IssueList;
