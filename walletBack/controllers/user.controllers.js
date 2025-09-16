import { Router } from "express";
import { getUser, getUsers, postUser, putUser, deleteUser } from "../router/user.router";

const router=Router();

router.get("/User", getUsers);
router.get("/User/id", getUser);
router.post("/User", postUser);
router.put("/User/id", putUser);
router.delete("/User/id", deleteUser)

export default router