import React from "react";

class IssueFilter extends React.Component {
  render() {
    return (
      <div>
        <h2>This filters the issue.</h2>
      </div>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    return (
      <div>
        <h2>This is a Table that displays the issues.</h2>
      </div>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return (
      <div>
        <h2>This is a place in the table, where we can add an issue.</h2>
      </div>
    );
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

export default IssueList;
