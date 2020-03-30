import React from "react";

function Issue(props) {
  const { issue } = props;
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.url}</p>
      <p>{issue.body}</p>
    </div>
  );
}

export default Issue;
