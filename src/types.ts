export type Planet = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: string[],
  films: string[],
  created: string,
  edited: string,
  url: string
};
export type NumericFilter = {
  column: string,
  comparison: string,
  value: string,
};

export type PlanetsContextType = {
  allPlanets: Planet[],
  filteredPlanets: Planet[],
  columnsToUse: string[] | [],
  filterByNumericValues: NumericFilter[],
  setFilteredPlanets: (planets: Planet[]) => void,
  setColumnsToUse: (column: string[]) => void,
  setFilterByNumericValues: (filter: NumericFilter[]) => void,
  setNumericFilter: (filter: NumericFilter) => void,
};

export type ReactChangeEvent = React.
  ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
