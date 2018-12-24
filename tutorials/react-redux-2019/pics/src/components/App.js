import React, { Component } from "react";
import unsplash from "./../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  //SET AS ARROW FUNCTION TO PREVENT SETSTATE ERROR, WORKS FOR ASYNC AWAIT
  onSearchSubmit = async term => {
    //use axios to send request over to unsplash api
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
