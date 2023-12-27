import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { useState } from 'react';
import { FiltersState, UpdateFilters } from 'types';

export function useUserFilters() {
  const [filters, setFilters] = useState<FiltersState>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    sex: { value: null, matchMode: FilterMatchMode.EQUALS },
    birthdate: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_BEFORE }],
    },
    registeredAt: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_BEFORE }],
    },
  });

  const updateGlobalFilter: UpdateFilters = (filterName) => (value) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterName]: { ...prevState[filterName], value: value },
    }));
  };

  return [filters, updateGlobalFilter] as [
    FiltersState,
    typeof updateGlobalFilter,
  ];
}
