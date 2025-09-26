import { Router } from "express";
import { getCategoria, 
    getCategorias, 
    postCategoria, 
    putCategoria, 
    deleteCategoria 
} from "../controllers/categoria.controllers.js";

const router=Router();

router.get("/categorias", getCategorias)
router.get("/categorias/:id", getCategoria)
router.post("/categorias", postCategoria)
router.put("/categorias/:id", putCategoria)
router.delete("/categorias/:id",deleteCategoria)

export default router


