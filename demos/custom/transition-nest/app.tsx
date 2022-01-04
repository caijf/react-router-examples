import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom-v6';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Layout, Home, About, NewsLayout, NewsList, NewsDetail, NotFound } from './pages';

// TODO: 抽象Route，包装nodeRef？（element包装ref的话，无法传递给CSSTransition，因为要使用Routes包裹组件）
// TODO: 支持设置部分页面不需要切换动画（参考TransitionGroup的参数 appear/enter/exit，pathname匹配。如果前一个页面不需要动画，后一个页面需要，前后是否有关联影响？解决是否只支持设置animated比较合理！？）

const Basic = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      {/* Layout 部分如果需要动画就放在 / 的 element，如果不需要动画就去掉 / 的 element，打开下面的注释 */}
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/news'>news</Link>
          </li>
        </ul>
      </nav> */}
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes location={location}>
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
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Basic;
