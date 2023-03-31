import React from 'react';
import { InputProps } from '../../types';

type FileData = {
  data?: Blob | MediaSource;
};
export const file: FileData = {};

function InputFile({ label, register, errors }: InputProps) {
  return (
    <div className="wrap-input">
      <label>
        {label}
        <input
          type="file"
          className="input"
          accept="image/png, image/jpeg"
          {...register(label, { required: 'Choose File!' })}
          onChange={(event) => {
            if (event.target.files) {
              file.data = event.target?.files[0];
            }
            return file;
          }}
        />
      </label>
      {errors?.Avatar && <div className="error">{errors.Avatar.message}</div>}
    </div>
  );
}
export default InputFile;
