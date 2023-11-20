import columns from '../utils/columns';

function OrderFilter() {
  return (
    <form>
      <label htmlFor="order">Ordenar por</label>
      <select name="order" id="order">
        {columns.map((column) => (
          <option key={ column } value={ column }>
            {(column)}
          </option>
        ))}
      </select>

      <label>
        <input type="radio" id="direction" name="direction" value="ASC" />
        {' '}
        Ascendente
      </label>
      <label>
        <input type="radio" id="direction" name="direction" value="DESC" />
        {' '}
        Descendente
      </label>

      <button data-testid="column-sort-button" type="submit">Ordenar</button>
    </form>
  );
}

export default OrderFilter;
