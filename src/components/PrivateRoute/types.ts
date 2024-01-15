import { ReactNode } from 'react';

export interface PrivateRouteProps {
  children: ReactNode;
  shouldBeAuthorized: boolean;
  redirectTo: string;
}
