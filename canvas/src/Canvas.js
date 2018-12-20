import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

class Canvas extends Component {
  state = { hex: "#0000ff", width: 400, height: 400, coords: null };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(); //createRef craetes a DOM component
    this.context = null;
  }

  componentDidUpdate() {
    this.setContext();
  }

  //set drawing stroke...

  setContext() {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex;
    this.context.lineJoin = "round";
    this.context.lineWidth = 3;
  }

  onColourSelectorChange = hex => {
    this.setState({ hex });
  }; //this.setstate always referes to canvas

  onCanvasMouseDown = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    this.setState({ coords: [x, y] });
  };

  onCanvasMouseUp = event => {
    this.setState({ coords: null });
  };

  onCanvasMouseMove = event => {
    const x = event.nativeEvent.offSetX;
    const y = event.nativeEvent.offSetY;
    const { coords, height, width } = this.state;

    //mouse on the canvas square
    if (x > 0 && y > 0 && x < width && y < height) {
      if (coords) {
        //drawing
        this.context.beginPath();
        this.context.moveTo(coords[0], coords[1]);
        this.context.lineTo(x, y);
        this.context.closePath();
        this.context.stroke();
        this.setState({ coords: [x, y] });
      }
    } else {
      this.setState({ coords: null });
    }
  };

  render() {
    const { hex, width, height } = this.state;

    return (
      <div>
        <div>
          <ColourSelector
            hex={hex}
            onColourSelectorChange={this.onColourSelectorChange}
          />
        </div>
        <canvas
          ref={this.canvasRef}
          width={width}
          height={height}
          style={{ border: "6px solid black" }}
          onMouseMove={this.onCanvasMouseMove}
          onMouseDown={this.onCanvasMouseDown}
          onMouseUp={this.onCanvasMouseUp}
        />
      </div>
    );
  }
}

export default Canvas;
