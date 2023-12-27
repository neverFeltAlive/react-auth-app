import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'configs';
import { useRoutes } from 'hooks/useRoutes.ts';
import { Menubar } from 'primereact/menubar';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LayoutProps } from './types.ts';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const routes = useRoutes();

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

  return (
    <PrimeReactProvider>
      <header>
        <Menubar className="h-24" model={routes} start={start} />
      </header>
      <main>{children}</main>
    </PrimeReactProvider>
  );
};
