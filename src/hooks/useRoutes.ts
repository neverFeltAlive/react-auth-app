import { MenuItem } from 'primereact/menuitem';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthentication } from './useAuthentication.ts';
import { useCurrentRoute } from './useCurrentRoute.ts';

export function useRoutes() {
  const currentPath = useCurrentRoute();
  const navigate = useNavigate();
  const [isUserAuthenticated, setIsUserAuthenticated] = useAuthentication();

  const routesMap: { [key: string]: MenuItem } = {
    '/': {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    '/browse': {
      label: 'Browse',
      icon: 'pi pi-fw pi-file',
      disabled: !isUserAuthenticated || '/browse' === currentPath,
    },
    '/login': isUserAuthenticated
      ? {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            setIsUserAuthenticated(false);
          },
        }
      : { label: 'Login', icon: 'pi pi-fw pi-check' },
  };

  // Add defaults to routes
  const routes = useMemo(
    () =>
      Object.entries(routesMap).map(
        ([url, route]) =>
          ({
            command: () => navigate(url),
            disabled: url === currentPath,
            ...route,
          }) as MenuItem
      ),
    [isUserAuthenticated, currentPath]
  );

  return routes;
}
