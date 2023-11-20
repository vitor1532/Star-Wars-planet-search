import { render, screen } from '@testing-library/react';
import App from '../App';
import PlanetsProvider from '../context/PlanetsProvider';

describe('Testa a renderização de todos os componentes da aplicação', () => {
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

});
