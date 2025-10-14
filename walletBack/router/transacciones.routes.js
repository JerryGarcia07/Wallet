import { Router } from "express";
import { deleteTransaccion, 
    getTransaccion, 
    getTransaccions, 
    postTransaccion, 
    putTransaccion 
} from "./../controllers/transacciones.controllers.js";

const router=Router();

router.get("/transacciones", getTransaccions);
router.get("/transacciones/:id", getTransaccion)
router.post("/transacciones", postTransaccion)
router.put("/transacciones/:id", putTransaccion)
router.delete("/transacciones/:id", deleteTransaccion)

export default router