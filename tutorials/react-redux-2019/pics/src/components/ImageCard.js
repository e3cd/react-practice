//Component that is responsible for showing one image by itself

import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    //create a reference and assign it to an instance variable
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //USE ARROW FUNCTION TO PREVENT SETSTATE ERROR
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
