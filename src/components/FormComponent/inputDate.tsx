import React from 'react';
import { InputProps } from '../../types';

function InputDate({ label, register, errors }: InputProps) {
  return (
    <div className="wrap-input">
      <label>
        {label}
        <input
          type="date"
          className="input"
          {...register(label, {
            required: 'Fill in the field!',
          })}
        />
      </label>
      {errors?.['Birthday date'] && <div className="error">{errors['Birthday date'].message}</div>}
    </div>
  );
}

export default InputDate;
