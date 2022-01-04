import React from 'react';
import { useRoutes } from 'react-router-dom-v6';
import { Layout, Home, About, NewsLayout, NewsList, NewsDetail, NotFound } from './pages';

const App = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'news',
          element: <NewsLayout />,
          children: [
            {
              index: true,
              element: <NewsList />,
            },
            {
              path: 'detail/:id',
              element: <NewsDetail />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return elements;
};

export default App;
