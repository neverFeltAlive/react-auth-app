import { Auth, Browse, Home } from 'pages';
import { FC } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components';

const renderPage = (Component: FC<object>) => (
  <Layout>
    <Component />
  </Layout>
);

export const routes = [
  {
    path: '/',
    element: renderPage(Home),
  },
  {
    path: '/login',
    element: renderPage(Auth),
  },
  {
    path: '/browse',
    element: renderPage(Browse),
  },
];

export const router = createBrowserRouter(routes);
