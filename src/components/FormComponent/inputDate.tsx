import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputDate extends React.Component<PropsFormType> {
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
    const { error } = this.props;
    return (
      <div className="wrap-input">
        <label>
          Birthday date:
          <input type="date" name="data" className="input" ref={this.dataRef} />
        </label>
        <span className="error">{error}</span>
      </div>
    );
  }
}

export default InputDate;
