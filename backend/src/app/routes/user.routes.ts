import { Router } from "../../../deps.ts";
import controllers from "../controllers/controllers.module.ts";

const router = new Router();

router
  .get("/users", controllers.user.getUsers)
  .get("/users/:id", controllers.user.getUserById);

export default router;
