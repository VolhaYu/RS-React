export type PageState = {
  page: string;
};
export interface RefObject<T> {
  readonly current: T | null;
}

export type Props = object;

export type PropsFormType = {
  label?: string;
  name?: string;
  error?: string;
  surName?: string;
  birthday?: string;
  file?: string;
  scill?: string;
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
  html?: string;
  css?: string;
  js?: string;
  react?: string;
  radio?: boolean;
}

export type State = {
  isValidate?: boolean;
  isHidden?: boolean;
  nameError?: string;
  surNameError?: string;
  birthError?: string;
  fileError?: string;
  selectError?: string;
  checkboxError?: string;
  radioError?: string;
  // nameValid?: boolean;
  // surNameValid?: boolean;
  // dataValid?: boolean;
  // inputError?: string;
  // fileValid?: boolean;
  // selectValid?: boolean;
  // htmlValid?: boolean;
  // cssValid?: boolean;
  // jstValid?: boolean;
  // reacttValid?: boolean;
  // radioValid?: boolean;
};
