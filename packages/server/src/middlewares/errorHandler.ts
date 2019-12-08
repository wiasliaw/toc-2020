import koa from 'koa';
import pino from 'pino';
import koaRouter from 'koa-router';

const httpcode: any = {
  400: 'Bad Request',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
};

const errorMessage = (code: number): object => {
  return {
    error: [
      {
        status: code,
        detail: httpcode[code] ? httpcode[code] : 'Internal Server Error',
      },
    ],
  };
};

const errorHandler = (logger: pino.Logger): koaRouter.IMiddleware => {
  return async (ctx: koa.Context, next: Function): Promise<any> => {
    try {
      await next();
      if (ctx.status === 404) {
        ctx.throw(404);
      }
    } catch (err) {
      logger.error('Error log: ', err);
      if (httpcode[err.status]) {
        ctx.body = errorMessage(err.status);
        ctx.status = err.status;
      } else {
        ctx.body = errorMessage(500);
        ctx.status = 500;
      }
    }
  };
};

export default errorHandler;
