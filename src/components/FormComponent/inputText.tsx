import React from 'react';
import { FormType } from '../../types';

class InputText extends React.Component<FormType> {
  render() {
    const { label } = this.props;
    return (
      <label className="label">
        {label}
        <input type="text" className="input" placeholder="Name" />
      </label>
    );
  }
}

export default InputText;
