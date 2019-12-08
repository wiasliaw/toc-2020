import koaCompose from 'koa-compose';
import pino from 'pino';
import logger from './logger';
import errorHandler from './errorHandler';

export default (logInstance: pino.Logger) => {
  const wares = [logger(logInstance), errorHandler(logInstance)];
  return koaCompose(wares);
};
