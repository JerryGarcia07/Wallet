//import categoria from './data.js';
import express from 'express';
import {PORT} from "./config.js"
import useRouter from './router/taks.routers.js';

const app= express();


//Middlewaree para leer json
app.use(express.json())
app.use(useRouter)


// let categoria = [
//   { id: 1, titulo: "Comida"},
//   { id: 2, titulo: "Pasaje" },
//   { id: 3, titulo: "Paga" },
// ];

// /* ========== RUTAS DEL CRUD ========== */

// // READ - Obtener todos los libros
// app.get('/categoria', (req, res)=>{
//    res.json(categoria)
// })

// // READ - Obtener un libro por su ID
// app.get('/categoria/:id', (req, res)=>{
//     const id=parseInt(req.params.id)
//     const cate= categoria.find(c=>c.id===id);
//     if(!cate){
//         return res.status(404).json({mensaje:"Categoria no encontrado"})
//     }
//     res.json(cate)
// })


// // CREATE - Agregar un nuevo libro
// app.post('/categoria', (req, res)=>{
//     const {titulo}=req.body
//     const nuevoCategoria={
//         id: categoria.length + 1,
//         titulo
//     }

//     categoria.push(nuevoCategoria)
//     res.status(201).json(nuevoCategoria)
// })

// // UPDATE - Modificar un libro existente
// app.put('/categoria/:id', (req, res)=>{
//     const id=parseInt(req.params.id)
//     const {titulo}=req.body

//     const cate= categoria.find(c=>c.id===id);
//     if(!cate){
//         return res.status(404).json({mensaje:"Categoria no encontrado"})
//     }

//     cate.titulo=titulo
//     res.json(categoria)
// })

// // DELETE - Eliminar un libro
// app.delete('/categoria/:id', (req, res)=>{
//     const id=parseInt(req.params.id)
//     categoria = categoria.filter(c=>c.id!==id);
//     res.json({mensaje: "categoria eliminado"})
// })

//iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})
