import './App.css';
import ColumnFilter from './components/ColumnFilter';
import NameFilter from './components/NameFilter';
import Table from './components/Table';

function App() {
  return (
    <>
      <h1>Projeto Star Wars - Trybe</h1>
      <NameFilter />
      <ColumnFilter />
      <Table />
    </>
  );
}

export default App;
