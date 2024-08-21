import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies } from './package.json';

export default defineConfig({
  server: {
    port: 3000,
  },
  moduleFederation: {
    options: {
      name: 'FLEX_EXTENSION_TEMPLATE',
      exposes: {
        './FLEX_EXTENSION_TEMPLATE': './src/App',
      },
      filename: 'remoteEntry.js',
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    },
  },
  html: {
    template: './index.html',
  },
  plugins: [pluginReact()],
});
