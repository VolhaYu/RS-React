import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

export type PageState = {
  page: string;
};
export interface RefObject<T> {
  readonly current: T | null;
}

export interface IFormValues {
  'First Name': string;
  'Last Name': string;
  'Birthday date': string;
  Avatar: string;
  City: number;
  HTML: string;
  CSS: string;
  JS: string;
  REACT: string;
  radio: string;
  scills: string;
}

export type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: FieldErrors<IFormValues>;
  onChange?: UseFormRegister<IFormValues>;
};

// export type Props = object;

export type PropsFormType = {
  label?: string;
  name?: string;
  error?: string;
  surName?: string;
  birthday?: string;
  file?: string;
  scill?: string;
  scills?: string;
  city?: string;
  HTML?: string;
  CSS?: string;
  JS?: string;
  REACT?: string;
  radio?: string;
  id?: string;
};

export interface Products {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}
export interface DataArray {
  nameFirst?: string;
  nameLast?: string;
  birthday?: string;
  avatar?: string;
  select?: string;
  scills?: string;
  // html?: string;
  // css?: string;
  // js?: string;
  // react?: string;
  // radio?: string;
}

// export type State = {
//   isValidate?: boolean;
//   isHidden?: boolean;
//   nameError?: string;
//   surNameError?: string;
//   birthError?: string;
//   fileError?: string;
//   selectError?: string;
//   checkboxError?: string;
//   radioError?: string;
// };
