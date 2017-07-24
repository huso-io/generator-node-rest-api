'use strict';

import chalk from 'chalk';
import requireDir from 'require-dir';
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins({
  DEBUG: false
});

let ctx = new chalk.constructor({
  enabled: true
});

try {
  requireDir('./task');
} catch (err) {
  $.util.log(
    ctx.red.bgBlack.bold('TASKS ') +
    ctx.white.bgBlack.bold('Fail to load mock routes!')
  );
  $.util.log(err);
}
