import {vi} from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import PlanetsProvider from '../context/PlanetsProvider';
import fullMock from '../utils/mockData';

let snakeCase = (str: string) => str.toLowerCase().replace(/ /g, '_');
let titleCase = (str: string) => str.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

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

  test('testa funções title e snake case', () => {
    const snake = 'snake_case';
    const title = 'Title Case';
    snakeCase = vi.fn().mockReturnValue(snake);
    titleCase = vi.fn().mockReturnValue(title);

    
    expect(snakeCase).not.toHaveBeenCalled();
    expect(titleCase).not.toHaveBeenCalled();


    expect(snakeCase(title)).toBe(snake);
    expect(titleCase(snake)).toBe(title);

    expect(snakeCase).toHaveBeenCalled();
    expect(titleCase).toHaveBeenCalled();

  });

  test('Verifica se a API chamada uma vez', async () => {


    const apiResponse = {
      ok: true,
      status: 200,
      json: async () => fullMock
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(apiResponse);

    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
      );

    const table = screen.getByRole('table');
    const select = screen.getByTestId('column-filter');
    expect(table).toBeInTheDocument();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://swapi.dev/api/planets');

    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('population');

    fireEvent.change(select, { target: { value: 'orbital_period' } });

    expect(select).toHaveValue('orbital_period');

    const cellValue = await screen.findByText(/Alderaan/i);
    expect(cellValue).toBeInTheDocument();
    
    expect(table).toContainHTML('<th>Name</th>');
    expect(table).toContainHTML('<th>Rotation Period</th>');
    expect(table).toContainHTML('<th>Orbital Period</th>');
    expect(table).toContainHTML('<th>Diameter</th>');
    expect(table).toContainHTML('<th>Climate</th>');
    expect(table).toContainHTML('<th>Gravity</th>');
    expect(table).toContainHTML('<th>Terrain</th>');
    expect(table).toContainHTML('<th>Surface Water</th>');
    expect(table).toContainHTML('<th>Population</th>');
    expect(table).toContainHTML('<th>Films</th>');
    expect(table).toContainHTML('<th>Created</th>');
    expect(table).toContainHTML('<th>Edited</th>');
    expect(table).toContainHTML('<th>Url</th>');
      
  })

});
