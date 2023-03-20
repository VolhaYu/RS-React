import React from 'react';

class InputFile extends React.Component {
  render() {
    return (
      <label>
        Avatar:
        <input type="file" className="input" />
      </label>
    );
  }
}

export default InputFile;
