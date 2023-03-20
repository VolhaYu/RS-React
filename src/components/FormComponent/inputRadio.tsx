import React from 'react';

class InputRadio extends React.Component {
  render() {
    return (
      <label>
        I agree to the processing of data
        <input type="radio" className="input" />
      </label>
    );
  }
}

export default InputRadio;
