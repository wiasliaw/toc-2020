import koa from 'koa';
import koaBodyparser from 'koa-bodyparser';
import koaHelmet from 'koa-helmet';
import pino from 'pino';
import middlewares from './middlewares';
import router from './router';
import config from './config';

const server = new koa();
const logger = pino(config.pino);

server.use(koaBodyparser());
server.use(koaHelmet());
server.use(middlewares(logger));
server.use(router.routes());
server.use((ctx: koa.Context) => {
  ctx.throw(404);
});

export default server;
