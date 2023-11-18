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
          {planets.length > 0 && Object.keys(planets[0]).map((key) => {
            if (key === 'residents') {
              return null;
            } const title = snakeCaseToTitleCase(key);
            return <th key={ key }>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {planets.map(({
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
          films,
          created,
          edited,
          url }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotation_period}</td>
              <td>{orbital_period}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surface_water}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
        ))}

      </tbody>
    </table>
  );
}

export default Table;
