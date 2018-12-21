import React, { Component } from "react";

class EntryForm extends Component {
  state = { entry: "" };

  onTextAreaChange = event => {
    this.setState({ entry: event.target.value });
  };

  render() {
    const { entry } = this.state;

    return (
      <form action="">
        <textarea value={entry} onChange={this.onTextAreaChange} />
        <div>
          <input type="submit" value="create a new entry" />
        </div>
      </form>
    );
  }
}

export default EntryForm;
