---
title: Authentication
order: 2
group:
  title: 官方示例
  path: /official
---

# Auth Example

This example demonstrates how to restrict access to routes to authenticated users.

Be sure to pay attention to the following features:

- The use of the `useNavigate()` hook and the `<Navigate>` component for navigating both imperatively after the login form is submitted and declaratively when a non-authenticated user visits a particular route
- The use of `location.state` to preserve the previous location so you can send the user there after they authenticate
- The use of `navigate("...", { replace: true })` to replace the `/login` route in the history stack so the user doesn't return to the login page when clicking the back button after logging in

> [StackBlitz](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx)

<code src='../../demos/official/auth' iframe="500" />
