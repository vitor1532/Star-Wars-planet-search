import { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { ReactChangeEvent } from '../types';
import '../styles/NameFilter.css';

function NameFilter() {
  const [nameInfo, setNameInfo] = useState('');
  const { allPlanets, setFilteredPlanets } = useContext(PlanetsContext);

  function handleChange(event: ReactChangeEvent) {
    const { value } = event.target;
    setNameInfo(value);
  }

  useEffect(() => {
    if (nameInfo) {
      const filtered = allPlanets.filter((planet) => planet.name.includes(nameInfo));
      setFilteredPlanets(filtered);
    } else {
      setFilteredPlanets(allPlanets);
    }
  }, [nameInfo]);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Pesquisar por nome"
        className="name-filter"
        value={ nameInfo }
        onChange={ handleChange }
      />
    </div>
  );
}

export default NameFilter;
