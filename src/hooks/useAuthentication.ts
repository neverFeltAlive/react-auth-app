import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  isAuthorizedSelector,
  setIsAuthorized as setIsAuthorizedStore,
} from 'store';

import { useAppDispatch } from './useAppDispatch.ts';
import { useAppSelector } from './useAppSelector.ts';

export function useAuthentication() {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(isAuthorizedSelector);
  const [isAuthorizedCookie, setIsAuthorizedCookie] = useCookies([
    'isAuthorized',
  ]);

  const setIsAuthorized = (value: boolean) => {
    dispatch(setIsAuthorizedStore(value));
  };

  useEffect(() => {
    if (isAuthorizedCookie.isAuthorized) {
      setIsAuthorized(true);
    }
  }, [isAuthorizedCookie]);

  const authorizeUser = () => {
    setIsAuthorized(true);
    setIsAuthorizedCookie('isAuthorized', 'true');
  };

  const unauthorizeUser = () => {
    setIsAuthorized(false);
    setIsAuthorizedCookie('isAuthorized', 'false');
  };

  return {
    isAuthorized,
    setIsAuthorized,
    authorizeUser,
    unauthorizeUser,
  };
}
