import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom-v6';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
);

export const About = () => (
  <div>
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
  const location = useLocation();

  return (
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
      {/* 有缺陷，页面离开时可能为当前页面，而且有警告 */}
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
