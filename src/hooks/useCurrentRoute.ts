import { matchRoutes, useLocation } from 'react-router-dom';
import { routes } from 'router.tsx';

export function useCurrentRoute() {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location) || [];

  return route?.path || null;
}
