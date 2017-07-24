'use strict';

import gulp from 'gulp';
import chalk from 'chalk';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins();
let ctx = new chalk.constructor({
  enabled: true
});

gulp.task('help', $.taskListing);

gulp.task('default', (cb) =>
  $.util.log(
    ctx.red.bgBlack.bold('没有任何 Gulp 任务...')
  )
);
