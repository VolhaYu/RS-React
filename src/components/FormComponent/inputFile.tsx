import React, { createRef } from 'react';
import { PropsFormType } from '../../types';

class InputFile extends React.Component<PropsFormType> {
  private fileRef = createRef<HTMLInputElement>();

  constructor(props: PropsFormType) {
    super(props);
    this.hendleInput = this.hendleInput.bind(this);
  }

  hendleInput() {
    let fileInput;
    if (this.fileRef.current?.files?.length) {
      fileInput = URL.createObjectURL(this.fileRef.current?.files[0]);
    }
    return fileInput;
  }

  render() {
    const { error } = this.props;
    return (
      <div className="wrap-input">
        <label>
          Avatar:
          <input
            type="file"
            name="file"
            className="input"
            accept="image/png, image/jpeg"
            ref={this.fileRef}
            // required
          />
        </label>
        <span className="error">{error}</span>
      </div>
    );
  }
}

export default InputFile;
