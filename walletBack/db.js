//db.js
import pg from "pg";

export const  pool = new pg.Pool({
    user:"postgres",
    host: "localhost",
    password: "147536982",
    database: "walletbd",
    port: "5432"
})

pool.query("select now()").then((result)=>{
    console.log(result)
})