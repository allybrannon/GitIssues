import React, { Component } from "react";
import Issue from "./Issue.jsx";

class IssueList extends Component {
  state = {
    issues: []
  };

  loadData = async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const data = response.json();
    console.log(response);
    return data;
  };

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    });
  }
  render() {
    const { title } = this.state;
    return <p>Can't figure this one out!</p>;
  }
}
export default IssueList;
