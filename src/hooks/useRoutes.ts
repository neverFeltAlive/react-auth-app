import { MenuItem } from 'primereact/menuitem';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthentication } from './useAuthentication.ts';
import { useCurrentRoute } from './useCurrentRoute.ts';

export function useRoutes() {
  const currentPath = useCurrentRoute();
  const navigate = useNavigate();
  const { isAuthorized: isUserAuthorized, unauthorizeUser } =
    useAuthentication();

  const routesMap: { [key: string]: MenuItem } = {
    '/': {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    '/browse': {
      label: 'Browse',
      icon: 'pi pi-fw pi-file',
      disabled: !isUserAuthorized || '/browse' === currentPath,
    },
    '/login': isUserAuthorized
      ? {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off text-red',
          command: () => {
            unauthorizeUser();
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
    [isUserAuthorized, currentPath]
  );

  return routes;
}
