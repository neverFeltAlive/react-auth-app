import { Auth, Browse, Home } from 'pages';
import { FC } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout, PrivateRoute } from './components';

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
    element: (
      <PrivateRoute shouldBeAuthorized={false} redirectTo="/">
        {renderPage(Auth)}
      </PrivateRoute>
    ),
  },
  {
    path: '/browse',
    element: (
      <PrivateRoute shouldBeAuthorized={true} redirectTo="/login">
        {renderPage(Browse)}
      </PrivateRoute>
    ),
  },
];

export const router = createBrowserRouter(routes);
