import * as React from 'react';
import Preview from '../../components/preview';

export default () => (
  <Preview
    type="github"
    project="remix-run/react-router/tree/main/examples/multi-app"
    options={{
      openFile: 'home/main.jsx',
      hideExplorer: true,
    }}
  />
);
