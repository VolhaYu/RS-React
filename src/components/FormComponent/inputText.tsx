import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputText extends React.Component<PropsFormType> {
  private nameRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const nameInput = this.nameRef.current;
    return nameInput?.value;
  }

  render() {
    const { label, name, error } = this.props;
    return (
      <div className="wrap-input">
        <label className="label">
          {label}
          <input type="text" name={name} className="input" ref={this.nameRef} required />
        </label>
        <span className="error">{error}</span>
      </div>
    );
  }
}

export default InputText;
