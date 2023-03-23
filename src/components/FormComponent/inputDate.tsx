import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputDate extends React.Component {
  private dataRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const dataInput = this.dataRef.current;
    return dataInput?.value;
  }

  render() {
    return (
      <label>
        Birthday date:
        <input type="date" name="data" className="input" ref={this.dataRef} required />
      </label>
    );
  }
}

export default InputDate;
