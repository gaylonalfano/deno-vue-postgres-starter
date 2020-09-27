import { Context } from "../deps.ts";

const timingMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const start = Date.now();
  // In between we use the power of next()
  // We're calling downstream middleware after we start timer and once the downstream
  // middleware completes, only then do we measure the delta
  await next();
  const delta = Date.now() - start;
  // Let's store this delta inside the response.headers so we can extract for logging
  // Need to convert to template string since delta: number
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
};

export default timingMiddleware;
