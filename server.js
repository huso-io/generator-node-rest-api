'use strict';

require('babel-core/register')();

// https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await
require('babel-polyfill');
require('./bin/app')();
