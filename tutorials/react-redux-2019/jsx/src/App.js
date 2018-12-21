import React, { Component } from "react";

// function getButtonText() {
//   return "Click me";
// }

class App extends Component {
  render() {
    const buttonText = { text: "clicke me" };

    return (
      <div>
        <label htmlFor="name" className="label">
          Enter name:
        </label>
        <input type="text" id="name" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          {buttonText.text}
        </button>
      </div>
    );
  }
}

export default App;
