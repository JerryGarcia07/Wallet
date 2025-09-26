//import categoria from './data.js';
import express from 'express';
import morgan from 'morgan';
import {PORT} from "./config.js"


//Routers
import cateRouter from './router/categoria.routes.js';
import userRouter from './router/usuario.routes.js';


const app= express();


//Middlewaree para leer json
app.use(express.json())
app.use(morgan("dev"))


//Usar router
app.use("/api", cateRouter);
app.use('/api', userRouter);


app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})
