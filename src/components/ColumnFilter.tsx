import { useContext, useState } from 'react';
import { NumericFilter, ReactChangeEvent } from '../types';
import PlanetsContext from '../context/PlanetsContext';

const comparisons = ['maior que', 'menor que', 'igual a'];

function ColumnFilter() {
  const {
    filteredPlanets,
    columnsToUse,
    filterByNumericValues,
    setFilteredPlanets,
    setColumnsToUse,
    setFilterByNumericValues,
  } = useContext(PlanetsContext);
  const [formInfo, setFormInfo] = useState<NumericFilter>({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleChange(event: ReactChangeEvent) {
    const { id, value } = event.target;

    setFormInfo({
      ...formInfo,
      [id]: value,
    });
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { column, comparison, value } = formInfo;

    setFilterByNumericValues([...filterByNumericValues, formInfo]);

    switch (comparison) {
      case 'maior que':
        setFilteredPlanets(
          filteredPlanets.filter(
            (planet: any) => Number(planet[column]) > Number(value),
          ),
        );
        break;
      case 'menor que':
        setFilteredPlanets(
          filteredPlanets.filter(
            (planet: any) => Number(planet[column]) < Number(value),
          ),
        );
        break;
      case 'igual a':
        setFilteredPlanets(
          filteredPlanets.filter(
            (planet: any) => Number(planet[column]) === Number(value),
          ),
        );
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="column">Coluna</label>
      <select
        id="column"
        value={ formInfo.column }
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columnsToUse.map((key) => (
          <option key={ key }>{ key }</option>
        ))}
      </select>

      <label htmlFor="comparison">Operador</label>
      <select
        id="comparison"
        value={ formInfo.comparison }
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((comparison) => (
          <option key={ comparison }>{ comparison }</option>
        ))}
      </select>

      <label htmlFor="value">Valor</label>
      <input
        id="value"
        type="number"
        value={ formInfo.value }
        onChange={ handleChange }
        data-testid="value-filter"
      />
      <button data-testid="button-filter" type="submit">Filtrar</button>
    </form>
  );
}

export default ColumnFilter;
