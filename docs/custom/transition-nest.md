---
title: Transition Nest
order: 3
group:
  title: 其他示例
  path: /custom
---

# Transition Nest Example

使用过度组件包裹路由嵌套。

问题：

- 使用 `React.StrictMode` 的情况下，有警告

<Alert type="error">
  Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition
  which is inside StrictMode. Instead, add a ref directly to the element you want to reference.
  Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node
</Alert>

理论上页面切换动画可以使用该方案。但还有以下两个问题：

1. 上面说的警告问题（Route 只能包裹在 Routes 或 Route，且不支持设置 ref）
2. 部分页面不需要动画，怎么设计合理

<br/>

<code src='../../demos/custom/transition-nest' iframe="300" />
