import { Context, log } from "../deps.ts";

const errorMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  // See if next() middleware has an error:
  try {
    await next();
  } catch (error) {
    log.error(error);
    ctx.response.body = "Internal server error.";
    throw error;
  }
};

export default errorMiddleware;
