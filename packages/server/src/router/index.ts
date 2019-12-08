// import koa from 'koa';
import koaRouter from 'koa-router';
import testHandler from '../lib/testHandler';
// import botHandler from '../lib/botHandler';

const router = new koaRouter();

router.get('/test', testHandler);
// router.post('/webhook', async (ctx: koa.Context) => {
//   await botHandler(ctx.req, ctx.res);
//   ctx.respond = false;
// });

export default router;
