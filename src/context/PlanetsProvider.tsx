import { useEffect, useState } from 'react';
import { Planet } from '../types';
import { fetchPlanets } from '../apis/StarWarsApi';
import PlanetsContext from './PlanetsContext';

type PlanetsProviderProps = {
  children: React.ReactNode;
};

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanets();
      setAllPlanets(data);
      setFilteredPlanets(data);
    };
    fetchData();
  }, []);

  const context = { allPlanets, filteredPlanets, setFilteredPlanets };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
