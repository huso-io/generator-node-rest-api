// @flow

'use strict';

let path = require('path');
let fs = require('fs');

let appDirectory = fs.realpathSync(process.cwd());
let resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env')
};
