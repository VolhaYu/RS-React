import React from 'react';
import { InputProps } from '../../types';

function InputText({ label, register }: InputProps) {
  return (
    <div className="wrap-input">
      <label className="label">
        {label}
        <input
          type="text"
          className="input"
          {...register(label, {
            required: 'Fill in the field!',
            minLength: {
              value: 4,
              message: 'Minimum 4 characters',
            },
            pattern: {
              value: /^[A-ZА-ЯЁ]{1}[a-zа-яё]+$/,
              message: 'Start with a capital letter!',
            },
          })}
        />
      </label>
    </div>
  );
}

export default InputText;
