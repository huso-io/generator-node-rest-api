'use strict';

import config from '../config/environment';
import rds from 'redis';
import noop from 'lodash/noop';
import chalk from 'chalk';
import bluebird from 'bluebird';

bluebird.promisifyAll(rds.RedisClient.prototype);
bluebird.promisifyAll(rds.Multi.prototype);

let _chalk = new chalk.constructor({enabled: true});

let rdsClt = rds.createClient(config.rds.client);

let rdsRdy  = () => {
  console.log(_chalk.green.bold('Redis is ready!'));
};

let rdsCnectd = noop;

let rdsErr = (err) => {
  throw err;
};

let rdsCls = (err) => {
  throw err;
};

rdsClt
  .on('ready', rdsRdy)
  .on('connect', rdsCnectd)
  .on('error', rdsErr)
  .on('close', rdsCls);

var middleware = module.exports = options => {
  return async (ctx, next) => {
    ctx.redis = rdsClt;
    await next();
  };
};
