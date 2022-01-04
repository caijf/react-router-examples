import React from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom-v6';

const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
);

const About = () => (
  <div>
    <h3>About</h3>
    <p>about page</p>
  </div>
);

const NewsLayout = () => {
  return (
    <div>
      <h3>News</h3>
      <Outlet />
    </div>
  );
};

const NewsList = () => (
  <div>
    <h3>List</h3>
    <nav>
      <ol>
        <li>
          <Link to="detail/1">news 1</Link>
        </li>
        <li>
          <Link to="detail/2">news 2</Link>
        </li>
        <li>
          <Link to="detail/3">news 3</Link>
        </li>
      </ol>
    </nav>
  </div>
);

const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Detail</h3>
      <p>params id is {id}</p>
    </div>
  );
};

const NotFound = () => (
  <div>
    <h3>404</h3>
  </div>
);

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/news">news</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<NewsLayout />}>
          <Route index element={<NewsList />} />
          <Route path="detail/:id" element={<NewsDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
