import { useContext, useEffect, useState } from 'react';
import { NumericFilter, ReactChangeEvent } from '../types';
import PlanetsContext from '../context/PlanetsContext';

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

    console.log(formInfo);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const columnExists = filterByNumericValues.some(
      (filter) => filter.column === formInfo.column,
    );

    if (!columnExists) {
      setFilterByNumericValues([...filterByNumericValues, formInfo]);
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
