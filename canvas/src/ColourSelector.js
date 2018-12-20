import React, { Component } from "react";

class ColourSelector extends Component {
  onInputChange = event => {
    const { onColourSelectorChange } = this.props;
    onColourSelectorChange(event.target.value);
  };

  render() {
    const { hex } = this.props;
    //controlled element with value instead of defaultValue, specifcically what it needs to be
    return (
      <input
        type="color"
        value={hex} //controlled element
        onChange={this.onInputChange}
      />
    );
  }
}

//setting default props below class as it is not hoisted

ColourSelector.defaultProps = {
  hex: "#ffff00"
};

export default ColourSelector;
