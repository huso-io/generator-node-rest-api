#!/bin/sh

echo "### 开始安装全局 Node 依赖..."

yarn global add \
  nodemon \
  np \
  autoprefixer \
  babel-cli \
  bower \
  browser-sync \
  caniuse-cmd \
  diff-so-fancy \
  eslint \
  eslint-plugin-flowtype \
  eslint-plugin-react \
  eslint-plugin-compat \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  gulp \
  grunt-cli \
  jscs \
  lerna \
  mocha \
  node-gyp \
  node-pre-gyp \
  parker \
  pm2 \
  postcss-cli \
  pug-cli \
  space-hogs \
  vtop \
  json-server \
  npm-check-updates \
  @storybook/cli \

echo "安装完成。"
