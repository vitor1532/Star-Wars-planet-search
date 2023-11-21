// const mockPlanets = [
//   {
//     name: 'Alderaan',
//     rotation_period: '24',
//     orbital_period: '364',
//     diameter: '12500',
//     climate: 'temperate',
//     gravity: '1 standard',
//     terrain: 'grasslands, mountains',
//     surface_water: '40',
//     population: '2000000000',
//     residents: [
//       'https://swapi-trybe.herokuapp.com/api/people/5/',
//       'https://swapi-trybe.herokuapp.com/api/people/68/',
//       'https://swapi-trybe.herokuapp.com/api/people/81/',
//     ],
//     films: [
//       'https://swapi-trybe.herokuapp.com/api/films/6/',
//       'https://swapi-trybe.herokuapp.com/api/films/1/',
//     ],
//     created: '2014-12-10T11:35:48.479000Z',
//     edited: '2014-12-20T20:58:18.420000Z',
//     url: 'https://swapi-trybe.herokuapp.com/api/planets/2/',
//   },
// ];

const standartGravity = '1 standard';
const filmLinks = 'https://swapi.dev/api/films/';

const mockPlanets = [
  {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: standartGravity,
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    residents: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/8/',
      'https://swapi.dev/api/people/9/',
      'https://swapi.dev/api/people/11/',
      'https://swapi.dev/api/people/43/',
      'https://swapi.dev/api/people/62/',
    ],
    films: [
      `${filmLinks}1`,
      `${filmLinks}3`,
      `${filmLinks}4`,
      `${filmLinks}5`,
      `${filmLinks}6`,
    ],
    created: '2014-12-09T13:50:49.641000Z',
    edited: '2014-12-20T20:58:18.411000Z',
    url: 'https://swapi.dev/api/planets/1/',
  },
  {
    name: 'Alderaan',
    rotation_period: '24',
    orbital_period: '364',
    diameter: '12500',
    climate: 'temperate',
    gravity: standartGravity,
    terrain: 'grasslands, mountains',
    surface_water: '40',
    population: '2000000000',
    residents: [
      'https://swapi.dev/api/people/5/',
      'https://swapi.dev/api/people/68/',
      'https://swapi.dev/api/people/81/',
    ],
    films: [
      `${filmLinks}1`,
      `${filmLinks}6`,
    ],
    created: '2014-12-10T11:35:48.479000Z',
    edited: '2014-12-20T20:58:18.420000Z',
    url: 'https://swapi.dev/api/planets/2/',
  },
  {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: standartGravity,
    terrain: 'jungle, rainforests',
    surface_water: '8',
    population: '1000',
    residents: [],
    films: [
      'https://swapi.dev/api/films/1/',
    ],
    created: '2014-12-10T11:37:19.144000Z',
    edited: '2014-12-20T20:58:18.421000Z',
    url: 'https://swapi.dev/api/planets/3/',
  },
  {
    name: 'Hoth',
    rotation_period: '23',
    orbital_period: '549',
    diameter: '7200',
    climate: 'frozen',
    gravity: '1.1 standard',
    terrain: 'tundra, ice caves, mountain ranges',
    surface_water: '100',
    population: 'unknown',
    residents: [],
    films: [
      `${filmLinks}2`,
    ],
    created: '2014-12-10T11:39:13.934000Z',
    edited: '2014-12-20T20:58:18.423000Z',
    url: 'https://swapi.dev/api/planets/4/',
  },
  {
    name: 'Dagobah',
    rotation_period: '23',
    orbital_period: '341',
    diameter: '8900',
    climate: 'murky',
    gravity: 'N/A',
    terrain: 'swamp, jungles',
    surface_water: '8',
    population: 'unknown',
    residents: [],
    films: [
      `${filmLinks}2`,
      `${filmLinks}3`,
      `${filmLinks}6`,
    ],
    created: '2014-12-10T11:42:22.590000Z',
    edited: '2014-12-20T20:58:18.425000Z',
    url: 'https://swapi.dev/api/planets/5/',
  },
  {
    name: 'Bespin',
    rotation_period: '12',
    orbital_period: '5110',
    diameter: '118000',
    climate: 'temperate',
    gravity: '1.5 (surface), 1 standard (Cloud City)',
    terrain: 'gas giant',
    surface_water: '0',
    population: '6000000',
    residents: [
      'https://swapi.dev/api/people/26/',
    ],
    films: [
      'https://swapi.dev/api/films/2/',
    ],
    created: '2014-12-10T11:43:55.240000Z',
    edited: '2014-12-20T20:58:18.427000Z',
    url: 'https://swapi.dev/api/planets/6/',
  },
  {
    name: 'Endor',
    rotation_period: '18',
    orbital_period: '402',
    diameter: '4900',
    climate: 'temperate',
    gravity: '0.85 standard',
    terrain: 'forests, mountains, lakes',
    surface_water: '8',
    population: '30000000',
    residents: [
      'https://swapi.dev/api/people/30/',
    ],
    films: [
      'https://swapi.dev/api/films/3/',
    ],
    created: '2014-12-10T11:50:29.349000Z',
    edited: '2014-12-20T20:58:18.429000Z',
    url: 'https://swapi.dev/api/planets/7/',
  },
  {
    name: 'Naboo',
    rotation_period: '26',
    orbital_period: '312',
    diameter: '12120',
    climate: 'temperate',
    gravity: standartGravity,
    terrain: 'grassy hills, swamps, forests, mountains',
    surface_water: '12',
    population: '4500000000',
    residents: [
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/21/',
      'https://swapi.dev/api/people/35/',
      'https://swapi.dev/api/people/36/',
      'https://swapi.dev/api/people/37/',
      'https://swapi.dev/api/people/38/',
      'https://swapi.dev/api/people/39/',
      'https://swapi.dev/api/people/42/',
      'https://swapi.dev/api/people/60/',
      'https://swapi.dev/api/people/61/',
      'https://swapi.dev/api/people/66/',
    ],
    films: [
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    created: '2014-12-10T11:52:31.066000Z',
    edited: '2014-12-20T20:58:18.430000Z',
    url: 'https://swapi.dev/api/planets/8/',
  },
];

const fullMock = {
  count: 60,
  next: 'https://swapi.dev/api/planets/?page=2',
  previous: null,
  results: mockPlanets,
};

export default fullMock;
