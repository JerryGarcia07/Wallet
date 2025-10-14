import { Router } from "express";
import { getUser, 
    getUsers, 
    postUser, 
    putUser, 
    deleteUser 
} from "./../controllers/usuario.controllers.js";

const router=Router();

router.get("/User", getUsers);
router.get("/User/:id", getUser);
router.post("/User", postUser);
router.put("/User/:id", putUser);
router.delete("/User/:id", deleteUser)

export default router