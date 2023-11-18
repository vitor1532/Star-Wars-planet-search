import { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function DisplayNumericFilters() {
  const { filterByNumericValues } = useContext(PlanetsContext);

  useEffect(() => {
    console.log(filterByNumericValues);
  }, [filterByNumericValues]);

  return (
    <>
      {filterByNumericValues.map((filter) => (
        <div key={ filter.column }>
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button>x</button>
        </div>
      ))}
    </>
  );
}

export default DisplayNumericFilters;
