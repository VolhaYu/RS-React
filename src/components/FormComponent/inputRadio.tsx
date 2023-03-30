import React from 'react';
import { InputProps } from '../../types';

function InputRadio({ label, register, errors }: InputProps) {
  return (
    <div className="wrap-input">
      <label>
        I agree to the processing of data:
        <input
          type="radio"
          className="input"
          {...register(label, { required: 'We must agree!' })}
        />
      </label>
      {errors?.radio && <div className="error">{errors.radio.message}</div>}
    </div>
  );
}

export default InputRadio;
