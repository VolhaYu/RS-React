import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputFile extends React.Component {
  private fileRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    const fileInput = this.fileRef.current?.files;
    console.log(fileInput);
    return fileInput ? URL.createObjectURL(fileInput[0]) : fileInput;
  }

  render() {
    return (
      <label>
        Avatar:
        <input
          type="file"
          name="file"
          className="input"
          accept="image/png, image/jpeg"
          ref={this.fileRef}
          required
        />
      </label>
    );
  }
}

export default InputFile;
