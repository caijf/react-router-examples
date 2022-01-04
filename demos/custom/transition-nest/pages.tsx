import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom-v6';
import './index.less';

export const Home = () => (
  <div style={{ background: 'red' }}>
    <h3>Home</h3>
  </div>
);

export const About = () => (
  <div style={{ background: 'blue' }}>
    <h3>About</h3>
    <p>about page</p>
  </div>
);

export const NewsLayout = () => {
  return (
    <div>
      <h3>News</h3>
      <Outlet />
    </div>
  );
};

export const NewsList = () => (
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

export const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Detail</h3>
      <p>params id is {id}</p>
    </div>
  );
};

export const NotFound = () => (
  <div>
    <h3>404</h3>
  </div>
);

export const Layout = () => {
  return (
    <div className="page">
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
};
