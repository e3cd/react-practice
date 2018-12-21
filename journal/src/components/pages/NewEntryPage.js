import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class NewEntryPage extends Component {
  state = { category: null, errorMessage: "" };
  componentDidMount() {
    const category = this.props.categories[this.props.match.params.index];
    if (!category) {
      this.setState({ errorMessage: "invalid category!" });
    }

    return this.setState({ category });
  }
  render() {
    const { category, errorMessage } = this.state;

    if (errorMessage) {
      return <Redirect to="/category" />;
    }
    return this.setState({ errorMessage: 'Invalid category'})

    this.render()
      <div>
        {errorMessage}
        {category && 
          <div>
              <Link to="/category"><button>Back to categories</button></Link>
            <h1>New {category} Entry </h1>
            <EntryForm 
          </div>
        }
      </div>
    );
  }
}

export default NewEntryPage;
