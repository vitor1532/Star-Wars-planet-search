import { useContext, useState } from 'react';
import columns from '../utils/columns';
import { ReactChangeEvent } from '../types';
import PlanetsContext from '../context/PlanetsContext';
import '../styles/OrderFilter.css';

const INITIAL_FORM = {
  column: 'population',
  sort: 'ASC',
};

function OrderFilter() {
  const [formInfo, setFormInfo] = useState(INITIAL_FORM);
  const { setFilterByOrder } = useContext(PlanetsContext);

  function handleChange(event: ReactChangeEvent) {
    const { name, value } = event.target;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilterByOrder(formInfo);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="order-container">
        <label htmlFor="column">Ordenar por</label>
        <select
          data-testid="column-sort"
          onChange={ handleChange }
          name="column"
          id="column"
          value={ formInfo.column }
        >
          {columns.map((column) => (
            <option key={ column } value={ column }>
              {(column)}
            </option>
          ))}
        </select>
      </div>

      <div className="sort-container">
        <label>
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            value="ASC"
            onChange={ handleChange }
            checked={ formInfo.sort === 'ASC' }
          />
          {' '}
          Ascendente
        </label>
        <label>
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            name="sort"
            value="DESC"
            onChange={ handleChange }
            checked={ formInfo.sort === 'DESC' }
          />
          {' '}
          Descendente
        </label>
      </div>

      <button data-testid="column-sort-button" type="submit">Ordenar</button>
    </form>
  );
}

export default OrderFilter;
