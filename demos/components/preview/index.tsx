import * as React from 'react';
import sdk from '@stackblitz/sdk';
import './index.less';

let uniqueId = 1;
const getUniqueId = (prefix = 'preview') => {
  uniqueId++;
  return `${prefix}${uniqueId}`;
};

type EmbedParams = Parameters<typeof sdk.embedProjectId>;

interface PreviewProps {
  type?: 'github' | 'stackblitz';
  project: EmbedParams[1];
  options?: EmbedParams[2];
}

// example
// export default () => (
//   <Preview
//     type='github'
//     project='remix-run/react-router/tree/main/examples/multi-app'
//     options={{
//       openFile: 'home/main.jsx',
//       hideExplorer: true
//     }}
//   />
// )
// export default () => (
//   <Preview
//     project='react-yye4eb'
//     options={{
//       openFile: 'src/App.js',
//       hideExplorer: true
//     }}
//   />
// )

const Preview: React.FC<PreviewProps> = ({ type = 'stackblitz', project, options = {} }) => {
  const id = React.useMemo(getUniqueId, []);
  const api = React.useMemo(
    () => (type === 'stackblitz' ? 'embedProjectId' : 'embedGithubProject'),
    [],
  );

  React.useEffect(() => {
    sdk[api](id, project, {
      height: 750,
      ...options,
    });
  }, []);

  return (
    <div>
      <div id={id} />
    </div>
  );
};

export default Preview;
