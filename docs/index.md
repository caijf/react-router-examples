---
title: README
---

# react-router-examples

> [react-router 官网](https://reactrouter.com/)

所有示例使用的版本 `react-router-dom v6` ，包含官方示例和个人示例。

## 注意说明

### 区分 dumi 的 `react-router-dom v5`

通过别名安装 `v6` 版本。

```bash
npm install --save react-router-dom-v6@npm:react-router-dom@6
# or
yarn add react-router-dom-v6@npm:react-router-dom@6
```

**.umirc.ts 去掉 resolve.alias**

```typescript
{
  // ...,
  chainWebpack(memo) {
    memo.resolve.alias.delete('react-router');
    memo.resolve.alias.delete('history');
  }
}
```

示例中原来要引用的 `react-router-dom` 改为 `react-router-dom-v6` 。

```typescript
// import { Routes, Route } from 'react-router-dom';
// =>
import { Routes, Route } from 'react-router-dom-v6';
```
