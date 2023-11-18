import { useContext } from 'react';
import './App.css';
import ColumnFilter from './components/ColumnFilter';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import PlanetsContext from './context/PlanetsContext';
import DisplayNumericFilters from './components/DisplayNumericFilters';

function App() {
  const { filterByNumericValues } = useContext(PlanetsContext);

  return (
    <>
      <h1>Projeto Star Wars - Trybe</h1>
      <NameFilter />
      <ColumnFilter />
      {filterByNumericValues.length > 0 && (
        <DisplayNumericFilters />
      )}
      <Table />
    </>
  );
}

export default App;
