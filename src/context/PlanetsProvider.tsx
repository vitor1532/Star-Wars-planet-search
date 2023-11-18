import { useEffect, useState } from 'react';
import { Planet } from '../types';
import { fetchPlanets } from '../apis/StarWarsApi';
import PlanetsContext from './PlanetsContext';

type PlanetsProviderProps = {
  children: React.ReactNode;
};

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanets();
      setPlanets(data);
    };
    fetchData();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
