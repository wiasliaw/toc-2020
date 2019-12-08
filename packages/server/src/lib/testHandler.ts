import koa from 'koa';
import koaRouter from 'koa-router';

const testHandle: koaRouter.IMiddleware = (
  ctx: koa.Context,
) => {
  ctx.body = 'hello';
  ctx.status = 200;
};

export default testHandle;
