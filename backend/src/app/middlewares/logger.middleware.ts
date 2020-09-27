import { Context, log } from "../../../deps.ts";

const loggerMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  await next();
  // We now have access to the response.headers from downstream middleware
  const reqTime = ctx.response.headers.get("X-Response-Time");
  // const reqId = ctx.response.headers.get("X-Response-Id");
  const status = ctx.response.status;
  log.info(
    `${ctx.request.method} ${ctx.request.url} - ${reqTime} status: ${status}`
  );
};

export default loggerMiddleware;
