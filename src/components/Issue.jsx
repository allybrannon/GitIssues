import React from "react";
import IssueList from "./IssueList";

const Issue = props => {
  return (
    <div>
      <table>
        <tr>
          <th>
            <a href={props.issue.html_url}>{props.issue.title}</a>
          </th>
        </tr>
        <tr>
          <td className="issueBody"> {props.issue.body}</td>
        </tr>
      </table>
    </div>
  );
};

export default Issue;
