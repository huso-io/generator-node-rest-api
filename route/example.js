// @flow

import config from '../config/environment';

const METHOD = 'POST';

const PATH = '/example';

const HANDLER = async function(ctx: Object, next: Function) {
  ctx.set('Content-Type', 'application/json');

  let Example = ctx.model('Example');
  let example = new Example({
    title: 'XXX'
  });

  await example.save();

  await ctx.redis.HMSET(
    config.rds.dbs.db.userCustom,
    new Date(),
    new Date()
  );

  ctx.body = JSON.stringify({
    msg: 'Example: hello world',
    status: 'OK'
  });

  await next();
};

export { METHOD, PATH, HANDLER };
