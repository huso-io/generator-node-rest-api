// @flow

const METHOD = 'GET';
const PATH = '/';
const HANDLER = async function(ctx: Object, next: Function) {
  ctx.set('Content-Type', 'application/json');
  await next();
  ctx.body = JSON.stringify({
    title: 'XXXXXXXXX',
    items: [{
      cardId: 'hjk',
      title: 'XXX',
      img: 'https://unsplash.it/412/138/?random',
      avatar: 'https://unsplash.it/100/100/?random',
      content: 'afadsdfs',
      creationDate: '2017/1/1',
      lastUpdate: '2017/1/1',
      favourites: 888,
      collaborators: 888,
      shareTimes: 888,
      views: 888,
      url: 'https://huso.io/hjk'
    }]
  });
};

export { METHOD, PATH, HANDLER };
