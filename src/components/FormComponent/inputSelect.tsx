import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputSelect extends React.Component<PropsFormType> {
  private selectRef = createRef<HTMLSelectElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const selectInput = this.selectRef.current;
    return selectInput?.value;
  }

  render() {
    return (
      <label>
        City:
        <select className="input" name="select" ref={this.selectRef} required>
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
