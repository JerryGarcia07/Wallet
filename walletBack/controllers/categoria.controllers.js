import {pool}  from "../db.js"

//obtener las categoria
export const getCategorias= async (req, res)=>{
        const {rows}= await pool.query("select * from categoria")
        res.json(rows)
    }
//obtener una categoria por id
export const getCategoria=async (req, res)=>{
    const {id}=req.params;
    const {rows} = await pool.query(`select * from categoria where id=$1`, [id]);
    if(rows.length===0) 
        return res.status(404).json({message: 'la categoria no encontrada'})
    res.json(rows[0])
}
//agrego una categoria
export const postCategoria=async (req, res)=>{
    const rest=req.body;
    const {rows}=await pool.query(`insert into categoria (nombre, usuario_id) VALUES ($1, $2) returning *`, [rest.nombre, rest.usuario_id])
    res.send(rows[0])
}
//actualizar categoria
export const putCategoria=async(req, res)=>{
    const {id}=req.params
    const rest=req.body
    const {rows} = await pool.query('update categoria set nombre=$1, usuario_id=$2 where id=$3', [rest.nombre, rest.usuario_id, id])
    return res.json(rows[0])             
}

//eliminar la categoria
export const deleteCategoria=async (req, res)=>{
    const {id}=req.params
    const { rowCount}=await pool.query(`delete from categoria where id=$1 returning *`, [id]);
    if(rowCount===0)
         return res.status(404).json({message: 'la categoria no eliminada'})
    return res.sendStatus(204)
}

//mostrar todos las categoria por usuario
export const getCategoriasUser=async (req, res)=>{
    const {id}=req.params
    const {rows}=await pool.query(`select c.id, c.nombre from categoria c where c.usuario_id = $1;`, [id])
    console.log(rows)
    if(rows.length===0)
        return res.status(404).json({message: 'la categoria no encontrada'})
    res.json(rows)
}