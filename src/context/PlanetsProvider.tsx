import { useEffect, useState } from 'react';
import { NumericFilter, Planet } from '../types';
import { fetchPlanets } from '../apis/StarWarsApi';
import PlanetsContext from './PlanetsContext';

type PlanetsProviderProps = {
  children: React.ReactNode;
};

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);
  const [columnsToUse, setColumnsToUse] = useState<string[]>(columns);
  const [filterByNumericValues, setFilterByNumericValues] = useState<NumericFilter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanets();
      setAllPlanets(data);
      setFilteredPlanets(data);
    };
    fetchData();
  }, []);

  const setNumericFilter = (filter: NumericFilter) => {
    setFilteredPlanets((prevFilteredPlanets) => {
      const { column, comparison, value } = filter;

      switch (comparison) {
        case 'maior que':
          return prevFilteredPlanets.filter(
            (planet: any) => Number(planet[column]) > Number(value),
          );
        case 'menor que':
          return prevFilteredPlanets.filter(
            (planet: any) => Number(planet[column]) < Number(value),
          );
        case 'igual a':
          return prevFilteredPlanets.filter(
            (planet: any) => Number(planet[column]) === Number(value),
          );
        default:
          return prevFilteredPlanets;
      }
    });
  };

  useEffect(() => {
    if (filterByNumericValues.length === 0) return;
    setNumericFilter(filterByNumericValues[filterByNumericValues.length - 1]);
  }, [filterByNumericValues]);

  const context = {
    allPlanets,
    filteredPlanets,
    columnsToUse,
    filterByNumericValues,
    setFilteredPlanets,
    setColumnsToUse,
    setFilterByNumericValues,
    setNumericFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
