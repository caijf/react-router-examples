import * as React from 'react';
import Preview from '../../components/preview';

export default () => (
  <Preview
    type="github"
    project="remix-run/react-router/tree/main/examples/lazy-loading"
    options={{
      openFile: 'src/App.tsx',
      hideExplorer: true,
    }}
  />
);
