import React from 'react';
import { InputProps } from '../../types';

function InputCheckbox({ label, register }: InputProps) {
  return (
    <>
      <label className="label-checkbox">
        <input
          type="checkbox"
          className="input-checkbox"
          {...register('scills', { required: 'Choose at least one option' })}
        />
        {label}
      </label>
      {/* {errors?.scills && <div className="error">{errors.scills.message}</div>} */}
    </>
  );
}

export default InputCheckbox;
