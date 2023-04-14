export const baseUrl = 'https://rickandmortyapi.com/api/character';

export interface Result {
  id?: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: [string];
  url?: string;
  created?: string;
}
export interface DataResult {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: [
    {
      id?: number;
      name: string;
      status: string;
      species: string;
      type?: string;
      gender: string;
      origin?: {
        name?: string;
        url?: string;
      };
      location?: {
        name?: string;
        url?: string;
      };
      image?: string;
      episode?: [string];
      url?: string;
      created?: string;
    }
  ];
}
