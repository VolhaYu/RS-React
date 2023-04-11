import React from 'react';
import { InputProps } from '../../types';

function InputSelect({ label, register, errors }: InputProps) {
  return (
    <div className="wrap-input">
      <label>
        {label}
        <select className="input" {...register(label, { required: 'Choose city!' })}>
          <option value=""> </option>
          <option value="Minsk">Minsk</option>
          <option value="Brest">Brest</option>
          <option value="Moscow">Moscow</option>
          <option value="St.Petersburg">St.Petersburg</option>
        </select>
      </label>
      {errors?.City && <div className="error">{errors.City.message}</div>}
    </div>
  );
}

export default InputSelect;
