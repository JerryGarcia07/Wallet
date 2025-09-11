//import categoria from './data.js';
import express from 'express';
import {PORT} from "./config.js"
import useRouter from './controllers/categoria.controllers.js';
import morgan from 'morgan';

const app= express();


//Middlewaree para leer json
app.use(express.json())
app.use(useRouter)
app.use(morgan("dev"))

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})
