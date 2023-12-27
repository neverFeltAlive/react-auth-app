import {
  APIOptions,
  FilterMatchMode,
  PrimeReactProvider as Provider,
} from 'primereact/api';
import { FC } from 'react';

import { PrimeReactProviderProps } from './types.ts';

export const PrimeReactProvider: FC<PrimeReactProviderProps> = ({
  children,
}) => {
  const value: Partial<APIOptions> = {
    filterMatchModeOptions: {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER,
      ],
    },
  };

  return <Provider value={value}>{children}</Provider>;
};
