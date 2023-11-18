import { createContext } from 'react';
import { PlanetsContextType } from '../types';

const PlanetsContext = createContext<PlanetsContextType>({} as PlanetsContextType);

export default PlanetsContext;
