import React from 'react';
import { InputProps } from '../../types';

function InputCheckbox({ label, register }: InputProps) {
  return (
    <label className="label-checkbox">
      <input
        type="checkbox"
        className="input-checkbox"
        value={label}
        {...register('scills', {
          onChange: (e) => {
            return e.target.value;
          },
          required: 'Choose at least one option',
        })}
      />
      {label}
    </label>
  );
}

export default InputCheckbox;
