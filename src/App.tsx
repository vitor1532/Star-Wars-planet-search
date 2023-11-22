import { useContext } from 'react';
import './App.css';
import ColumnFilter from './components/ColumnFilter';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import PlanetsContext from './context/PlanetsContext';
import DisplayNumericFilters from './components/DisplayNumericFilters';
import OrderFilter from './components/OrderFilter';
import Header from './components/Header';
import './styles/FilterWrapper.css';

function App() {
  const { filterByNumericValues } = useContext(PlanetsContext);

  return (
    <>
      <Header />
      <div className="filter-wrappers">
        <NameFilter />
        <div className="numbers-wrapper">
          <ColumnFilter />
          <OrderFilter />
        </div>
        {filterByNumericValues.length > 0 && (
          <DisplayNumericFilters />
        )}
      </div>
      <Table />
    </>
  );
}

export default App;
