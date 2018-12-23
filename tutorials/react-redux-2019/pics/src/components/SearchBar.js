import React, { Component } from "react";

class SearchBar extends Component {
  //method that gets called when the user enters text in the inuput
  //   onInputChange(event) {
  //     console.log(event.target.value); //contains the text that the user has added to the input
  //   }

  state = { term: "" };

  //event handler that prevents refreshing of submitting
  //USE ARROW FUNCTION TO PREVENT STATE IS UNDEFINED ERROR
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/* this.oniNputChange is a callback function, leave parentheses to pass a reference to the function on input element, this will be called at sometime in the future*/}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
