import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputFile extends React.Component {
  private fileRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const fileInput = this.fileRef.current.files[0].name;
    return fileInput;
  }

  render() {
    return (
      <label>
        Avatar:
        <input type="file" name="file" className="input" ref={this.fileRef} required />
      </label>
    );
  }
}

export default InputFile;
