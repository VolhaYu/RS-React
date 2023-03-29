import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputRadio extends React.Component<PropsFormType> {
  private radioRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const radioInput = this.radioRef.current;
    return radioInput?.checked;
  }

  render() {
    const { error } = this.props;
    return (
      <div className="wrap-input">
        <label>
          I agree to the processing of data:
          <input type="radio" name="radio" className="input" ref={this.radioRef} />
        </label>
        <span className="error">{error}</span>
      </div>
    );
  }
}

export default InputRadio;
