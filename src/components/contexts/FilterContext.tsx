import { PropsWithChildren, createContext, useState } from 'react';
import { Filter } from '../types/filter';

export type ToggleFilterFunction = (filter: Filter & { enabled: boolean }) => void;

export interface FilterContextValue {
  filters: Filter[];
  toggleFilter: ToggleFilterFunction;
}

export const FilterContext = createContext<FilterContextValue>({
  filters: [],
} as unknown as FilterContextValue);

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const toggleFilter: ToggleFilterFunction = ({ field, value, enabled }) => {
    setFilters([
      ...filters.filter((filter) => !(filter.field === field && filter.value === value)),
      ...(enabled ? [{ field, value }] : []),
    ]);
  };

  return (
    <FilterContext.Provider value={{ filters, toggleFilter }}>{children}</FilterContext.Provider>
  );
};
