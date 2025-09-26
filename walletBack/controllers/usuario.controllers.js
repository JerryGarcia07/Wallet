import { pool } from "../db.js";

//obtener una categoria
export const getUsers= async(req, res)=>{
    const {rows}=await pool.query("select * from usuario")
    res.json(rows)
}
//obtener una categoria por id
export const getUser=async(req, res)=>{
    const {id}=req.params;
    const {rows}=await pool.query("select * from usuario where id=*$1", [id]);
    if(rows.length===0) 
        return res.status(404).json({message:"usuario no encontrado"})
    res.json(rows[0])
}
//agrego una categoria
export const postUser=async(req, res)=>{
    const rest=req.body;
    const {rows}=await pool.query("insert into usuario (nombre, email, password) values ($1, $2, $3)", [rest.nombre, rest.email, rest.password])
    res.send(rows[0])
}
//actualizar categoria
export const putUser=async(req, res)=>{
    const rest=req.body;
    const {id}=req.params;
    const {rows}=await pool.query("update usuario set nombre=$1, email=$2, password=$3 where id=$4", [rest.nombre, rest.email, rest.password, id])
    return res.json(rows[0])
}
//eliminar categoria
export const deleteUser=async(req, res)=>{
    const {id}=req.params;
    const {rowCount}=await pool.query("delete from usuario where id=$1", [id])
    if(rowCount.length===0)
        return res.status(404).json({message:"usuario no encontrado"})
    return res.sendStatus(204)
}