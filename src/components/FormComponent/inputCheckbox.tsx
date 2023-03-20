import React from 'react';
import { FormType } from '../../types';

class InputCheckbox extends React.Component<FormType> {
  render() {
    const { label } = this.props;
    return (
      <label className="label-checkbox">
        <input type="checkbox" className="input input-checkbox" />
        {label}
      </label>
    );
  }
}

export default InputCheckbox;
