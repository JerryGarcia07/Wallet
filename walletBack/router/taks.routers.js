import { Router } from "express";
import {pool}  from "../db.js";

const router=Router();

//obtener una categoria
router.get("/categorias", (req, res)=>{
    res.send("obtenido Usuario")
})
//obtener una categoria por id
router.get("/categorias/:id", (req, res)=>{
    const {id}=req.params
    res.send(`obtenido Usuario ${userId}`)
})

//agrego una categoria
router.post("/categorias", (req, res)=>{
    res.send("Creando Categoria")
})

//actualizar categoria
router.put("/categorias/:id", (req, res)=>{
    const {id}=req.params
    res.send(`actualizando actegoria ${id}`)                 
})

//eliminar categoria
router.delete("/categorias/:id", (req, res)=>{
    const {id}=req.params
    res.send(`elimina categoria ${id}`)
})


export default router