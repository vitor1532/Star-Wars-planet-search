import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import snakeCaseToTitleCase from '../utils/titleCase';

function DisplayNumericFilters() {
  const { filterByNumericValues } = useContext(PlanetsContext);

  return (
    <>
      {filterByNumericValues.map((filter) => (
        <div key={ snakeCaseToTitleCase(filter.column) }>
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button>x</button>
        </div>
      ))}
    </>
  );
}

export default DisplayNumericFilters;
