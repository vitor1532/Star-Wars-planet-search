import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import snakeCaseToTitleCase from '../utils/TitleCase';
import '../styles/Table.css';

function Table() {
  const { planets } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          {planets.length > 0 && Object.keys(planets[0]).map((key) => (
            <th key={ key }>{snakeCaseToTitleCase(key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
