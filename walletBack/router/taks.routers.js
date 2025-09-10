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
    const {rows} = await pool.query(`select * from categoria where id=${id}`);
    if(rows.length===0) 
        return res.status(404).json({message: 'la categoria no encontrada'})
    res.json(rows[0])
})

//agrego una categoria
router.post("/categorias", async (req, res)=>{
    const rest=req.body;
    const {rows}=await pool.query(`insert into categoria (nombre, usuario_id) VALUES ($1, $2) returning *`, [rest.nombre, rest.usuario_id])
    console.log(rows)
    res.send(rows[0])
})

//actualizar categoria
router.put("/categorias/:id", (req, res)=>{
    const {id}=req.params
    res.send(`actualizando actegoria ${id}`)                 
})

//eliminar categoria
router.delete("/categorias/:id", async (req, res)=>{
    const {id}=req.params
    const { rowCount}=await pool.query(`delete from categoria where id=$1 returning *`, [id]);
    if(rowCount===0)
         return res.status(404).json({message: 'la categoria no encontrada'})
    return res.sendStatus(204)
})


export default router