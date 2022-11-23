import {Router} from "express";
import users from "./users.js";

const router = Router();

router.get("/users", users);

export default router