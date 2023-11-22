import { useContext, useEffect, useState } from 'react';
import { NumericFilter, ReactChangeEvent } from '../types';
import PlanetsContext from '../context/PlanetsContext';
import '../styles/ColumnFilter.css';

const comparisons = ['maior que', 'menor que', 'igual a'];

const INITIAL_FORM = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function ColumnFilter() {
  const {
    columnsToUse,
    filterByNumericValues,
    setColumnsToUse,
    setFilterByNumericValues,
    setOperation,
  } = useContext(PlanetsContext);
  const [formInfo, setFormInfo] = useState<NumericFilter>(INITIAL_FORM);

  useEffect(() => {
    if (filterByNumericValues.length === 0) return;
    const newColumnsToUse = columnsToUse.filter((column) => column !== formInfo.column);

    setColumnsToUse(newColumnsToUse);
    setFormInfo({ ...INITIAL_FORM, column: newColumnsToUse[0] });
  }, [filterByNumericValues]);

  function handleChange(event: ReactChangeEvent) {
    const { id, value } = event.target;

    setFormInfo({
      ...formInfo,
      [id]: value,
    });
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOperation('addFilter');
    const columnExists = filterByNumericValues.some(
      (filter) => filter.column === formInfo.column,
    );

    if (!columnExists) {
      setFilterByNumericValues([...filterByNumericValues, formInfo]);
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="label-wrapper">
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
      </div>

      <div className="label-wrapper">
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
      </div>

      <div className="label-wrapper">
        <label htmlFor="value">Valor</label>
        <input
          id="value"
          type="number"
          value={ formInfo.value }
          onChange={ handleChange }
          data-testid="value-filter"
        />
      </div>
      <button
        className="button-filter"
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
    </form>
  );
}

export default ColumnFilter;
