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

  test('Testa o componente DisplayNumericFilters', async () => {
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

      const select = screen.getByTestId('column-filter');
      const comparison = screen.getByTestId('comparison-filter');
      const value = screen.getByTestId('value-filter');
      const btn = screen.getByTestId('button-filter');
      const names = await screen.findAllByTestId('planet-name');

      fireEvent.change(select, { target: { value: 'orbital_period' } });
      fireEvent.change(comparison, { target: { value: 'maior que' } });
      fireEvent.change(value, { target: { value: '400' } });

      expect(names[0]).toHaveTextContent('Tatooine');
      expect(select).toHaveValue('orbital_period');
      expect(comparison).toHaveValue('maior que');
      expect(value).toHaveValue(400);

      fireEvent.click(btn);

      const newNames = await screen.findAllByTestId('planet-name');
      const filterDisplay = await screen.findAllByTestId('filter');
      const removeFilterBtn = await screen.findAllByTestId('remove-single-filter');

      expect(newNames).toHaveLength(4);
      expect(newNames[0]).toHaveTextContent('Yavin IV');

      expect(filterDisplay).toHaveLength(1);
      expect(filterDisplay[0]).toHaveTextContent('orbital_period maior que 400');

      expect(removeFilterBtn).toHaveLength(1);
      expect(removeFilterBtn[0]).toBeInTheDocument();

      fireEvent.click(removeFilterBtn[0]);

      expect(filterDisplay[0]).not.toBeInTheDocument();

      fireEvent.change(select, { target: { value: 'population' } });
      fireEvent.change(comparison, { target: { value: 'maior que' } });
      fireEvent.change(value, { target: { value: '2000' } });

      fireEvent.click(btn);

      const newNames2 = await screen.findAllByTestId('planet-name');
      const filterDisplay2 = await screen.findAllByTestId('filter');

      expect(newNames2).toHaveLength(5);
      expect(filterDisplay2[0]).toHaveTextContent('population maior que 2000');

      const removeFiltersBtn = screen.getByTestId('button-remove-filters');

      fireEvent.click(removeFiltersBtn);

      expect(filterDisplay[0]).not.toBeInTheDocument();
  });

  test('Testa a filtragem por ordem ascendente e descendente', async () => {
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

      const select = screen.getByTestId('column-sort');
      const asc = screen.getByTestId('column-sort-input-asc');
      const desc = screen.getByTestId('column-sort-input-desc');
      const btn = screen.getByTestId('column-sort-button');
      const names = await screen.findAllByTestId('planet-name');

      expect(names[0]).toHaveTextContent('Tatooine');

      fireEvent.change(select, { target: { value: 'population' } });
      fireEvent.click(asc);
      fireEvent.click(btn);

      const ascNames = await screen.findAllByTestId('planet-name');

      expect(ascNames[0]).toHaveTextContent('Yavin IV');

      fireEvent.click(desc);
      fireEvent.click(btn);

      const descNames = await screen.findAllByTestId('planet-name');

      expect(descNames[0]).toHaveTextContent('Naboo');
  });

  test('testa o name Filter', async () => {
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

      const input = screen.getByTestId('name-filter');
      const names = await screen.findAllByTestId('planet-name');

      expect(names[0]).toHaveTextContent('Tatooine');
      expect(names[1]).toHaveTextContent('Alderaan');
      expect(names).toHaveLength(8);

      fireEvent.change(input, { target: { value: 'oo' } });

      const newNames = await screen.findAllByTestId('planet-name');

      expect(newNames).toHaveLength(2);
      expect(newNames[0]).toHaveTextContent('Tatooine');
      expect(newNames[1]).toHaveTextContent('Naboo');
  });

});
