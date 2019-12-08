import koaRouter from 'koa-router';
import testHandler from '../lib/testHandler';
import botHandler from '../lib/botHandler';

const router = new koaRouter();

router.get('/test', testHandler);
// router.post('/webhook', );

export default router;
