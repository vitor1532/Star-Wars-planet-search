import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import snakeCaseToTitleCase from '../utils/titleCase';
import { NumericFilter } from '../types';

function DisplayNumericFilters() {
  const { filterByNumericValues,
    removeNumericFilter,
    setOperation,
  } = useContext(PlanetsContext);

  const handleRemoveFilter = (filterToRemove: NumericFilter) => {
    setOperation('removeFilter');
    removeNumericFilter(filterToRemove);
  };

  return (
    <>
      {filterByNumericValues.map((filter) => (
        <div data-testid="filter" key={ snakeCaseToTitleCase(filter.column) }>
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button onClick={ () => handleRemoveFilter(filter) }>x</button>
        </div>
      ))}
    </>
  );
}

export default DisplayNumericFilters;
