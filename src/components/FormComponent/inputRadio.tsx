import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues, InputProps } from '../../types';

// const InputRadio = React.forwardRef<
//   HTMLInputElement,
//   { label: string } & ReturnType<UseFormRegister<IFormValues>>
// >(({ onChange, onBlur, name, label }, ref) => (
//   <div className="wrap-input">
//     <label>
//       I agree to the processing of data:
//       <input
//         type="radio"
//         className="input"
//         name={name}
//         ref={ref}
//         onChange={onChange}
//         onBlur={onBlur}
//       />
//     </label>
//     {/* {errors?.radio && <div className="error">{errors.radio.message}</div>} */}
//   </div>
// ));

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
