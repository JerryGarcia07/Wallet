import { pool } from "../db";

//obtener una transaccion
export const getTransaccions= async(req, res)=>{
    const {rows}=await pool.query("select * from transacciones")
    res.json(rows)
}
//obtener una transaccion por id
export const getTransaccion=async(req, res)=>{
    const {id}=res.params;
    const {rows}=await pool.query("select * from transacciones where id=$1", [id]);

    if(rows.length===0) return res.status(404).json({message: 'la transaccion encontrada'})
    res.json(rows[0])
}
//agrego una transaccion
export const postTransaccion=async(req, res)=>{
    const rest=req.body
    const {rows}=await pool.query('INSERT INTO transacciones (monto, descripcion, tipo, usuario_id, catagoria_id) VALUES ($1, $2, $3, $4, $5)' , [rest.monto, rest.descripcion, rest.tipo, rest.usuario_id, rest.catagoria_id]);
    res.send(rows[0]);
}
//actualizar transparentes
export const putTransaccion=async(req, res)=>{
    const {id}=req.params;
    const rest=req.body
    const {rows}=await pool.query('update transacciones set monto=$1, descripcion=$2, tipo=$3, usuario_id=$4, catagoria_id=$5 where id=$6', [rest.monto, rest.descripcion, rest.tipo, rest.usuario_id, rest.catagoria_id, id])
    return res.json(rows[0])

}
//eliminar transaccion
export const deleteTransaccion=async(req, res)=>{
    const {id}= req.params
    const {rowCount}=await pool.query('delete from transacciones where id=$1 returning *', [id])
    if(rowCount===0) return res.status(404).json({message: 'la transacciones eliminada'})
    return res.sendStatus(204);
}