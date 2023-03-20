import React from 'react';

class InputDate extends React.Component {
  render() {
    return (
      <label>
        Birthday date:
        <input type="date" className="input" />
      </label>
    );
  }
}

export default InputDate;
