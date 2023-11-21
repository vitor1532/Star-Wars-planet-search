import {vi} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import PlanetsProvider from '../context/PlanetsProvider';

describe('Testa a renderização de todos os componentes da aplicação', () => {

  afterEach(() => vi.clearAllMocks());

  test('Testa se os componentes são renderizados', () => {
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
      );

    const title = screen.getByText(/Projeto Star Wars - Trybe/i);
    const nameFilter = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const columnSortAsc = screen.getByTestId('column-sort-input-asc');
    const columnSortDesc = screen.getByTestId('column-sort-input-desc');

    
    expect(title).toBeInTheDocument();
    expect(nameFilter).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
    expect(columnSortAsc).toBeInTheDocument();
    expect(columnSortDesc).toBeInTheDocument();
  })

  // Renderiza a tabela com os dados da API e verifica se ela foi chamada uma vez
  // test('Verifica se a API chamada uma vez', async () => {
  //     const planetData = [
  //       {
  //         "name": "Alderaan", 
  //         "rotation_period": "24", 
  //         "orbital_period": "364", 
  //         "diameter": "12500", 
  //         "climate": "temperate", 
  //         "gravity": "1 standard", 
  //         "terrain": "grasslands, mountains", 
  //         "surface_water": "40", 
  //         "population": "2000000000", 
  //         "residents": [
  //           "https://swapi-trybe.herokuapp.com/api/people/5/", 
  //           "https://swapi-trybe.herokuapp.com/api/people/68/", 
  //           "https://swapi-trybe.herokuapp.com/api/people/81/"
  //         ], 
  //         "films": [
  //           "https://swapi-trybe.herokuapp.com/api/films/6/", 
  //           "https://swapi-trybe.herokuapp.com/api/films/1/"
  //         ], 
  //         "created": "2014-12-10T11:35:48.479000Z", 
  //         "edited": "2014-12-20T20:58:18.420000Z", 
  //         "url": "https://swapi-trybe.herokuapp.com/api/planets/2/"
  //       }
  //     ]

  //   const apiResponse = {
  //     ok: true,
  //     status: 200,
  //     results: async () => planetData
  //   };

  //   const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(apiResponse as any);

  //   render(
  //     <PlanetsProvider>
  //       <App />
  //     </PlanetsProvider>
  //     );

  //   const table = screen.getByRole('table');

  //   await waitFor(() => {
  //     expect(mockFetch).toHaveBeenCalledTimes(1);
  //   });

  //   // Wait for the table to be filled
  //   await waitFor(() => {
  //     const cellValue = screen.getByText(/Alderaan/i);
  //     expect(cellValue).toBeInTheDocument();
  //   });
    
  //   expect(table).toBeInTheDocument();

      
  // })

});
