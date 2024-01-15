import { useAppSelector } from 'hooks/useAppSelector.ts';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthorizedSelector } from 'store';

import { PrivateRouteProps } from './types.ts';

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  shouldBeAuthorized,
  redirectTo,
}) => {
  const isAuthorized = useAppSelector(isAuthorizedSelector);

  return isAuthorized === shouldBeAuthorized ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} />
  );
};
