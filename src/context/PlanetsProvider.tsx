import { useEffect, useState } from 'react';
import { NumericFilter, OperationType, OrderFilterType, Planet } from '../types';
import { fetchPlanets } from '../apis/StarWarsApi';
import PlanetsContext from './PlanetsContext';
import columns from '../utils/columns';

type PlanetsProviderProps = {
  children: React.ReactNode;
};

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);
  const [columnsToUse, setColumnsToUse] = useState<string[]>(columns);
  const [filterByNumericValues, setFilterByNumericValues] = useState<NumericFilter[]>([]);
  const [filterByOrder, setFilterByOrder] = useState<OrderFilterType>({
    column: 'start', sort: 'start' });
  const [operation, setOperation] = useState<OperationType>('addFilter');

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
    if (filterByNumericValues.length === 0) {
      setFilteredPlanets(allPlanets);
      setColumnsToUse(columns);
      return;
    }
    if (operation === 'addFilter') {
      setNumericFilter(filterByNumericValues[filterByNumericValues.length - 1]);
    } else {
      setFilteredPlanets(allPlanets);
      filterByNumericValues.forEach((filter) => {
        setNumericFilter(filter);
      });
    }
  }, [filterByNumericValues]);

  const removeNumericFilter = (filterToRemove: NumericFilter) => {
    setFilterByNumericValues(
      (prevFilterByNumericValues) => prevFilterByNumericValues.filter(
        (filter) => filter.column !== filterToRemove.column
          || filter.comparison !== filterToRemove.comparison
          || filter.value !== filterToRemove.value,
      ),
    );
  };

  const orderPlanets = (column: keyof Planet, sort: string) => {
    const last = 'unknown';
    const sortedPlanets = [...filteredPlanets].sort((a, b) => {
      if (a[column] !== last && b[column] === last) {
        return sort === 'ASC' ? -1 : 1;
      }
      return sort === 'ASC' ? Number(a[column]) - Number(b[column])
        : Number(b[column]) - Number(a[column]);
    });
    setFilteredPlanets(sortedPlanets);
  };

  useEffect(() => {
    const { column, sort } = filterByOrder;

    orderPlanets(column as keyof Planet, sort);
  }, [filterByOrder]);

  const context = {
    allPlanets,
    filteredPlanets,
    columnsToUse,
    filterByNumericValues,
    setFilteredPlanets,
    setColumnsToUse,
    setFilterByNumericValues,
    setNumericFilter,
    removeNumericFilter,
    setOperation,
    setFilterByOrder,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
