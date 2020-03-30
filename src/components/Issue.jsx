import React from "react";
import IssueList from "./IssueList";

const Issue = props => {
  console.log(props);
  return (
    <div>
      <p className="issueLink">
        <a href={props.issue.url}>{props.issue.title}</a>
      </p>
      <p className="issueBody"> {props.issue.body}</p>
    </div>
  );
};

export default Issue;
