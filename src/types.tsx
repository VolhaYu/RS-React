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
  surName?: string;
  birthday?: string;
  file?: string;
  scill?: string;
  count?: number;
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
