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

  const context = {
    allPlanets,
    filteredPlanets,
    columnsToUse,
    filterByNumericValues,
    setFilteredPlanets,
    setColumnsToUse,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
