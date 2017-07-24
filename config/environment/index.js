'use strict';
/*eslint no-process-env:0*/

import { normalize } from 'path';
import merge from 'lodash/merge';
import paths from './paths';
import fs from 'fs';

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    '必须设置 `NODE_ENV` 环境变量！'
  );
}

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('你必须设置 ' + name + ' 环境变量！');
  }
  return process.env[name];
}

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
let dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  paths.dotenv,
].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile,
    });
  }
});

let root = normalize(`${__dirname}/../..`);

module.exports = {
  env: requiredProcessEnv('NODE_ENV'),
  root: root,
  browserSyncPort: process.env.BROWSER_SYNC_PORT || 6888,
  port: normalizePort(process.env.PORT || 9000),
  ip: process.env.IP || '0.0.0.0',
  rds: {
    client: {
      port: process.env.REDIS_PORT || 9697,
      host: process.env.REDIS_HOST || '127.0.0.1',
      password: process.env.REDIS_PASS || 'cnHUSO!#$246'
    },
    dbs: {
      db: {
        'target': 'db-targets',
        'shorturl': 'db-shorturls',
        'timestamp': 'db-timestamp',
        'targetInfo': 'db-target-info',
        'clientTriggerDate': 'db-client-trigger-date',
        'visitTimes': 'db-visit-times',
        'userCustom': 'db-user-custom'
      },
      lst: {
        'stid': 'lst-shortids',
        'target': 'lst-targets',
        'shorturl': 'lst-shorturls',
        'ip': 'lst-ips'
      }
    }
  },
  mongo: {
    uri: process.env.MONGO_URI ||
          'mongodb://HusoAdmin:cnHUSO!#$246@localhost:9123',
    schemas: root + '/schema'
  }
};
