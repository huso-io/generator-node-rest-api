// @flow

import config from '../config/environment';
import Koa from 'koa';
import compress from 'koa-compress';
import fs from 'fs';
import http from 'http';
import https from 'http2';
import error from 'koa-json-error';
import helmet from 'koa-helmet';
import cors from 'kcors';
import { isEqual } from 'lodash';
import mongoose from '../middleware/koa-mongoose';
import redis from '../middleware/koa-redis';
import loadRoutes from './load.routes';
import Router from 'koa-router';
import bodyParser from '../middleware/koa-body-parser';

//TODO: 令牌
exports = module.exports = function() {
  let app = new Koa();
  let router = new Router();
  let env = process.env.NODE_ENV;

  if (isEqual(env, 'development')) {
    let responseTime = require('koa-response-time');
    let logger = require('koa-logger');

    app
      .use(responseTime())
      .use(logger());
  }

  app
    .use(mongoose(config.mongo))
    .use(redis())
    .use(helmet())
    .use(compress())
    .use(cors())
    .use(error())
    .use(bodyParser({
      enableTypes: ['form']
    }));

  loadRoutes(router, (err) => {
    if (!err) {
      app
        .use(router.routes())
        .use(router.allowedMethods());

      console.log('路由加载成功。');

      setImmediate(() => {
        if (isEqual(process.env.HTTPS, 'true')) {
          https.createServer({
            key: fs.readFileSync('server-key.pem'),
            cert: fs.readFileSync('server-cert.pem')
          }, app.callback()).listen(config.port, () => {
            console.log(
              'Koa 服务器运行在 `%d` 端口上, 处于 `%s` 模式下。',
              config.port,
              env
            );
          });
        } else {
          http.createServer(app.callback()).listen(config.port, () => {
            console.log(
              'Koa 服务器运行在 `%d` 端口上, 处于 `%s` 模式下。',
              config.port,
              env
            );
          });
        }
      });
    } else {
      throw err;
    }
  });
};
