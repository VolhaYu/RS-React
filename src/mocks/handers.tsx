import { rest } from 'msw';
import { baseUrl } from '../components/ApiCards/api';

export const handlers = [
  rest.get(`${baseUrl}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{name: 'name1'}, {name: 'name2'}
        // {
      //   id: 1,
      //   name: 'Rick',
      //   status: 'Alive',
      //   species: 'Human',
      //   type: '',
      //   gender: 'Male',
      //   origin: {
      //     name: 'Earth',
      //     url: 'https://rickandmortyapi.com/api/location/1',
      //   },
      //   location: {
      //     name: 'Earth',
      //     url: 'https://rickandmortyapi.com/api/location/20',
      //   },
      //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      //   episode: [
      //     "https://rickandmortyapi.com/api/episode/1",
      //     "https://rickandmortyapi.com/api/episode/2",
      //     // ...
      //   ],
      //   url: "https://rickandmortyapi.com/api/character/2",
      //   created: "2017-11-04T18:50:21.651Z"
      // }
    ])
    );
  }),
];
