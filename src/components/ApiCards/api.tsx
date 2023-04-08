export const baseUrl = 'https://rickandmortyapi.com/api/character';

export const path = {
  character: '/character',
  locations: '/location',
  episodes: '/episodes',
};

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
  onClick?: () => void;
}
export interface ResultData {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null;
  };
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: [string];
    url: string;
    created: string;
  };
}
