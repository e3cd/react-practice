import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  //   constructor(props) {
  //     super(props); //reference to parents constructor function

  //     this.state = { latitude: null, errorMessage: "" }; //state object, initialize our state with a property called laittude
  //   }

  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        //take the latitude out of position and update the state, this.setState only gets called after the first rendering when the user allows access to location
        this.setState({ latitude: position.coords.latitude }),
      //success callback
      error => {
        this.setState({ errorMessage: error.message });
      } //failure callback
    );
  }

  renderContent() {
    //returning different jsx with conditional rendering depending on state or props in our component
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      //taking a prop form state from app component and passing it as a prop to season display
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
