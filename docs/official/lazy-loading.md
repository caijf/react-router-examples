---
title: Lazy Loading
order: 6
group:
  title: 官方示例
  path: /official
---

# Lazy Loading Example

This example demonstrates how to lazily load both

- individual route elements
- entire portions of your route hierarchy

on demand using `React.lazy()` and dynamic `import()`. Using this technique, pages that are not required on the home page can be split out into separate bundles, thereby decreasing load time on the initial page and improving performance.

> [StackBlitz](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/lazy-loading?file=src/App.tsx)

<!-- <code src='../../demos/official/lazy-loading' iframe="500" /> -->
