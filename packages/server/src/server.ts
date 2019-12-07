import koa from 'koa';

const server = new koa();

server.use((ctx: koa.Context) => {
  ctx.body = 'hello';
  ctx.status = 200;
});

export default server;
