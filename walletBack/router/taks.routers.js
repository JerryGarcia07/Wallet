import { Router } from "express";
import {pool}  from "../db.js";

const router=Router();

//obtener una categoria
router.get("/categorias", async (req, res)=>{
    const {rows}= await pool.query("select * from categoria")
    console.log(rows)
    res.json(rows)
})
//obtener una categoria por id
router.get("/categorias/:id", async (req, res)=>{
    const {id}=req.params;
    const {rows} = await pool.query(`select * from categoria where id=${id}`)
    res.json(rows[0])
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