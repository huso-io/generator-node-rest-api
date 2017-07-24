#!/usr/bin/env node

var gitValidate = require('git-validate');
var _ = require('lodash');

_.forEach({
  'clean-console': 'node ./tool/clear.console',

  'lint': 'node_modules/.bin/run-p -p scss-lint eslint',

  'deps-license': 'node_modules/.bin/npm-run-all -p deps-license-development deps-license-production',

  'deps-license-development': 'node_modules/.bin/license-checker --development --csv --out licenses-dev.csv',

  'deps-license-production': 'node_modules/.bin/license-checker --production --csv --out licenses.csv',

  'check-package': 'node_modules/.bin/nsp check && npm run clean-console && yarn list && npm run clean-console && yarn check --integrity && npm run clean-console && yarn deps-license',

  'pre-commit': 'node_modules/.bin/run-p -p --silent check-package'
}, function(val, key) {
  gitValidate.installScript(key, val);
});

gitValidate.configureHook('pre-commit', ['pre-commit']);
