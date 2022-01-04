import { defineConfig } from 'dumi';
import pkg from './package.json';

const MajorVersionNumber = Number(pkg.version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

const preMajorVersionNumber = MajorVersionNumber - 1;
const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const version = process.env.BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const serverRootDirect =
  process.env.NODE_ENV === 'production' ? 'https://doly-dev.github.io/react-router-examples/' : '/';
const logo = 'https://www.caijinfeng.com/assets/images/logo-doly@3x.png';
const favicon = 'https://www.caijinfeng.com/assets/images/doly-touch-icon_48x48.png';

const publicPath = serverRootDirect + version + '/';

const prodConfig: any = {};

if (process.env.NODE_ENV === 'production') {
  prodConfig.chunks = ['vendors', 'umi'];
  prodConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
  };
}

export default defineConfig({
  title: 'react-router-examples',
  publicPath,
  logo,
  favicon,
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  hash: true,
  navs: [
    null,
    // {
    //   title: `v${preMajorVersionNumber}.x`,
    //   path: `https://doly-dev.github.io/react-router-examples/${preVersionSiteRoot}/index.html`
    // },
  ],
  ...prodConfig,
  // more config: https://d.umijs.org/config
});
