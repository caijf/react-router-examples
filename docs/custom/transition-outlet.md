---
title: Transition Outlet
order: 2
group:
  title: 其他示例
  path: /custom
---

# Transition Outlet Example

使用过度组件包裹 `Outlet`。

问题：

- 页面离开时可能为当前页面
- 使用 `React.StrictMode` 的情况下，有警告

<Alert type="error">
  Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition
  which is inside StrictMode. Instead, add a ref directly to the element you want to reference.
  Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node
</Alert>

<br/>

<code src='../../demos/custom/transition-outlet' iframe="300" />
