import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1000 };
  }

  render() {
    return (
      <InputRange
        maxValue={15000}
        minValue={1000}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  }
}

export default RangeSlider