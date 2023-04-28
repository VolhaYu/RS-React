import React from 'react';
import { InputProps } from '../../types';

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
        />
      </label>
      {errors?.Avatar && <div className="error-form">{errors.Avatar.message}</div>}
    </div>
  );
}
export default InputFile;
