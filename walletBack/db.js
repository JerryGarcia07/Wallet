//db.js
import pg from "pg";

export default pool =new pg.Pool({
    user:"postgres",
    host: "localhost",
    password: "147536982",
    database: "walletbd",
    port: "5432"
})