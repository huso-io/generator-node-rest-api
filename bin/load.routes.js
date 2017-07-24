import config from '../config/environment';
import glob from 'glob';
import { lowerCase, forEach } from 'lodash';

export default function(route, cb) {
  glob(config.root + '/route/**/*.js', (err, rlst) => {
    if (!err) {
      forEach(rlst, (item) => {
        let _item = require(item);
        switch(lowerCase(_item.METHOD)) {
          case 'get': {
            route.get(_item.PATH, _item.HANDLER);
            break;
          }
          case 'post': {
            route.post(_item.PATH, _item.HANDLER);
            break;
          }
          case 'put': {
            route.put(_item.PATH, _item.HANDLER);
            break;
          }
          case 'delete': {
            route.delete(_item.PATH, _item.HANDLER);
            break;
          }
          case 'head': {
            route.head(_item.PATH, _item.HANDLER);
            break;
          }
          case 'options': {
            route.options(_item.PATH, _item.HANDLER);
            break;
          }
          case 'trace': {
            route.trace(_item.PATH, _item.HANDLER);
            break;
          }
          case 'copy': {
            route.copy(_item.PATH, _item.HANDLER);
            break;
          }
          case 'lock': {
            route.lock(_item.PATH, _item.HANDLER);
            break;
          }
          case 'mkcol': {
            route.mkcol(_item.PATH, _item.HANDLER);
            break;
          }
          case 'move': {
            route.move(_item.PATH, _item.HANDLER);
            break;
          }
          case 'purge': {
            route.purge(_item.PATH, _item.HANDLER);
            break;
          }
          case 'propfind': {
            route.propfind(_item.PATH, _item.HANDLER);
            break;
          }
          case 'proppatch': {
            route.proppatch(_item.PATH, _item.HANDLER);
            break;
          }
          case 'unlock': {
            route.unlock(_item.PATH, _item.HANDLER);
            break;
          }
          case 'report': {
            route.report(_item.PATH, _item.HANDLER);
            break;
          }
          case 'mkactivity': {
            route.mkactivity(_item.PATH, _item.HANDLER);
            break;
          }
          case 'checkout': {
            route.checkout(_item.PATH, _item.HANDLER);
            break;
          }
          case 'merge': {
            route.merge(_item.PATH, _item.HANDLER);
            break;
          }
          case 'notify': {
            route.notify(_item.PATH, _item.HANDLER);
            break;
          }
          case 'subscribe': {
            route.subscribe(_item.PATH, _item.HANDLER);
            break;
          }
          case 'unsubscribe': {
            route.unsubscribe(_item.PATH, _item.HANDLER);
            break;
          }
          case 'patch': {
            route.patch(_item.PATH, _item.HANDLER);
            break;
          }
          case 'search': {
            route.search(_item.PATH, _item.HANDLER);
            break;
          }
          case 'connect': {
            route.connect(_item.PATH, _item.HANDLER);
            break;
          }
          default: {
            return;
          }
        }
      });
      return cb(null);
    }
    cb(err);
  });
}
