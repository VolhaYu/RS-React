import React from 'react';

class InputSelect extends React.Component {
  render() {
    return (
      <label>
        City:
        <select className="input">
          <option value="Minsk">Minsk</option>
          <option value="Brest">Brest</option>
          <option value="Moscow">Moscow</option>
          <option value="St.Petersburg">St.Petersburg</option>
        </select>
      </label>
    );
  }
}

export default InputSelect;
