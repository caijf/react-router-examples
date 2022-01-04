---
title: Route Objects
order: 9
group:
  title: 官方示例
  path: /official
---

# Route Objects Example

This example demonstrates how to use the `useRoutes()` hook to define and render routes using regular JavaScript objects instead of `<Routes>` and `<Route>` elements. This is mainly a stylistic preference that may make more sense in some scenarios, depending on the data structures you're working with to define your routes.

One interesting thing to note is that even if you don't use this hook directly, `<Routes>` uses it internally. So either way you're using the exact same code path!

> [StackBlitz](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/route-objects?file=src/App.tsx)

<code src='../../demos/official/route-objects' iframe="500" />
