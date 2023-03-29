import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputCheckbox extends React.Component<PropsFormType> {
  private checkboxRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const checkboxInput = this.checkboxRef.current;
    return checkboxInput?.checked;
  }

  render() {
    const { label } = this.props;
    return (
      <label className="label-checkbox">
        <input name="checkbox" type="checkbox" className="input-checkbox" ref={this.checkboxRef} />
        {label}
      </label>
    );
  }
}

export default InputCheckbox;
