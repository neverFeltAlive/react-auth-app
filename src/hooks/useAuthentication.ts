import {
  isAuthorizedSelector,
  setIsAuthorized as setIsAuthorizedStore,
} from 'store';

import { useAppDispatch } from './useAppDispatch.ts';
import { useAppSelector } from './useAppSelector.ts';

export function useAuthentication() {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(isAuthorizedSelector);

  const setIsAuthorized = (value: boolean) => {
    dispatch(setIsAuthorizedStore(value));
  };

  return [isAuthorized, setIsAuthorized] as [boolean, typeof setIsAuthorized];
}
