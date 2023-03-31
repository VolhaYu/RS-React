import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues, InputProps } from '../../types';

function InputFile({ label, register, errors, onChange }: InputProps) {
  return (
    <div className="wrap-input">
      <label>
        {label}
        <input
          type="file"
          className="input"
          accept="image/png, image/jpeg"
          // name="Avatar"
          // ref={register}
          {...register(label, { required: 'Choose File!' })}
        />
      </label>
      {errors?.Avatar && <div className="error">{errors.Avatar.message}</div>}
    </div>
  );
}
export default InputFile;
