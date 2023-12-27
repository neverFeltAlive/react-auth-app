import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'configs';
import { useRoutes } from 'hooks/useRoutes.ts';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useCurrentRoute } from '../../hooks/useCurrentRoute.ts';
import { LayoutProps } from './types.ts';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const routes = useRoutes();
  const currentPath = useCurrentRoute();

  const start = (
    <Link to={'/'}>
      <img
        alt="logo"
        src="https://primefaces.org/cdn/primereact/images/logo.png"
        height="40"
        className="w-10"
      ></img>
    </Link>
  );
  const end =
    currentPath === '/browse' ? (
      <InputText placeholder="Search" type="text" className="w-full" />
    ) : (
      <></>
    );

  return (
    <PrimeReactProvider>
      <header>
        <Menubar className="h-24" model={routes} start={start} end={end} />
      </header>
      <main>{children}</main>
    </PrimeReactProvider>
  );
};
