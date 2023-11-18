import { useContext, useState } from 'react';
import { ReactChangeEvent } from '../types';
import PlanetsContext from '../context/PlanetsContext';
import snakeCaseToTitleCase from '../utils/titleCase';
import titleCaseToSnakeCase from '../utils/snakeCase';

// population, orbital_period, diameter, rotation_period e surface_water
const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

function ColumnFilter() {
  const { filteredPlanets, setFilteredPlanets } = useContext(PlanetsContext);
  const [formInfo, setFormInfo] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleChange(event: ReactChangeEvent) {
    const { id, value } = event.target;
    // if (id === 'column') {
    //   setFormInfo({
    //     ...formInfo,
    //     column: titleCaseToSnakeCase(value),
    //   });
    // } else {
    setFormInfo({
      ...formInfo,
      [id]: value,
    });
    // }
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { column, comparison, value } = formInfo;
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
        {columns.map((key) => (
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
