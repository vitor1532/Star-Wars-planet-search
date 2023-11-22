import { useContext } from 'react';
import './App.css';
import ColumnFilter from './components/ColumnFilter';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import PlanetsContext from './context/PlanetsContext';
import DisplayNumericFilters from './components/DisplayNumericFilters';
import OrderFilter from './components/OrderFilter';
import Header from './components/Header';

function App() {
  const { filterByNumericValues } = useContext(PlanetsContext);

  return (
    <>
      <Header />
      <NameFilter />
      <ColumnFilter />
      <OrderFilter />
      {filterByNumericValues.length > 0 && (
        <DisplayNumericFilters />
      )}
      <Table />
    </>
  );
}

export default App;
