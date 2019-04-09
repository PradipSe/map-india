/**
 * Global API endpoint URL conf.
 */
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { MapCallApi } = require("../../controllers");

/**
 * Router with global prefix declaration
 */
const router = new Router({ prefix: "/endpoint/api" });

/**
 * Auth endpoint api route
 * API Route URL:
 * http://(host:port)/endpoint/api/json
 */
router.get("/json", bodyParser(), async ctx => {
  await MapCallApi(ctx);
});

module.exports = router;
