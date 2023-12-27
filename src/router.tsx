import { Auth, Browse, Home } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);
