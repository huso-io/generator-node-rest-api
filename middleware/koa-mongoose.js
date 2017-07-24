import glob from 'glob';
import util from 'util';
import mongoose from 'mongoose';
import config from '../config/environment';
import { isEqual, lowerCase, map } from 'lodash';

/*
  功能,
    1. 使用最新版本的 mongoose
    2. 使用原生 Promise
    2. 缓存所有 models
    3. 缓存所有 schemas
    4. 使用不同数据库

  Options,
    schemas
    uri
    database
*/

mongoose.Promise = global.Promise;

var middleware = module.exports = options => {
  if (!options || !options.uri) {
    throw new Error('MongoDB 的一些配置是必要的，但是现在没有。');
  }

  middleware.models = {};
  middleware.dbs = {};

  let db = mongoose.createConnection(options.uri, {
    poolSize: 100,
    useMongoClient: true
  });

  let optSchemaDir = options.schemas;

  if (optSchemaDir) {
    let devide = isEqual(
                  optSchemaDir.lastIndexOf('/'),
                  (optSchemaDir.length - 1)
                ) ? '' : '/';

    let schemaDir = optSchemaDir + devide;
    let schemas = glob.sync(schemaDir + '/**/*.js');

    map(schemas, (schema) => {
      let model = lowerCase(
        schema.replace(schemaDir, '')
              .replace(/\.js$/g, '')
              .replace(/\//g, '.')
      );
      middleware.models[model] = db.model(model, require(schema));
    });
  }

  let database;
  database = 'huso';

  if (options.database) {
    database = isEqual(typeof(options.database), 'function') ?
                options.database(ctx) :
                  options.database;
  }

  if (!middleware.dbs.hasOwnProperty(database)) {
    middleware.dbs[database] = db.useDb(database);
  }

  db.on('error', err => {
    db.close();
  });

  return async (ctx, next) => {
    ctx.model = model => {
      try {
        return middleware.model(database, model);
      } catch(err) {
        ctx.throw(400, err.message);
      }
    }

    ctx.document = (model, document) => new (ctx.model(model))(document);

    await next();
  };
}

middleware.model = (database, model) => {
  let name = lowerCase(model);

  if (!middleware.models.hasOwnProperty(name)) {
    throw new Error(
      util.format(
        'Model not found: %s.%s',
        database,
        model
      )
    );
  }

  return middleware.dbs[database].model(
    model,
    middleware.models[name].schema
  );
};

middleware.document = (database, model, document) => new (middleware.model(database, model))(document);
