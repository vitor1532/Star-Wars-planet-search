import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import snakeCaseToTitleCase from '../utils/titleCase';
import { NumericFilter } from '../types';

function DisplayNumericFilters() {
  const { allPlanets,
    filterByNumericValues,
    setFilteredPlanets,
    setFilterByNumericValues,
    removeNumericFilter,
    setOperation,
  } = useContext(PlanetsContext);

  const handleRemoveFilter = (filterToRemove: NumericFilter) => {
    setOperation('removeFilter');
    removeNumericFilter(filterToRemove);
  };

  const resetFilters = () => {
    setFilteredPlanets(allPlanets);
    setFilterByNumericValues([]);
  };

  return (
    <>
      {filterByNumericValues.map((filter) => (
        <div data-testid="filter" key={ snakeCaseToTitleCase(filter.column) }>
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button onClick={ () => handleRemoveFilter(filter) }>x</button>
        </div>
      ))}
      <button
        onClick={ resetFilters }
        data-testid="button-remove-filters"
      >
        Remover Filtros
      </button>
    </>
  );
}

export default DisplayNumericFilters;
