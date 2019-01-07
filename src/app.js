const serverless = require('serverless-http');
const koa = require('koa'); // or any supported framework
const bodyParser = require('koa-bodyparser');
const log = require("roarr");
const logger = require('koa-roarr');
const securityHelmet = require('koa-helmet');
const Router = require('koa-router');

const app = koa();
const router = Router();

app.use(securityHelmet());
app.use(bodyParser());
app.use(logger({ log }))

router.get('/', (ctx, next) => {
    
})
app
  .use(router.routes())
  .use(router.allowedMethods());

// this is it!
module.exports.handler = serverless(app);