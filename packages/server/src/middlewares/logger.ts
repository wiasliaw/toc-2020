import koa from 'koa';
import pino from 'pino';
import koaRouter from 'koa-router';

export default (logger: pino.Logger): koaRouter.IMiddleware => {
  return async (ctx: koa.Context, next: Function): Promise<any> => {
    const start = Date.now();
    await next();
    const timeMS = Date.now() - start;
    const message = `${ctx.ip} ${ctx.method} ${ctx.url} ${
      ctx.status
    } ${timeMS}ms ${JSON.stringify(ctx.request.body || {})}`;
    if (ctx.status >= 400) {
      logger.error(message);
    } else {
      logger.info(message);
    }
  };
};
