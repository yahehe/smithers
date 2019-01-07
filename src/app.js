const serverless = require('serverless-http');
const koa = require('koa'); // or any supported framework
const bodyParser = require('koa-bodyparser');
const logger = require('koa-bunyan-logger');
const securityHelmet = require('koa-helmet');
const Router = require('koa-router');
const { hello } = require('./modules/hello');

const app = new koa();
const router = Router();
app.use(securityHelmet());
app.use(bodyParser());
app.use(logger({ name: 'smithers', level: 'debug' }));
app.use(logger.requestIdContext());
app.use(logger.requestLogger());

router.get('/hello', hello);
    
app
  .use(router.routes())
  .use(router.allowedMethods());

// this is it!
module.exports.handler = serverless(app);