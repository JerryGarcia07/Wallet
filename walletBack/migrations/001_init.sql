CREATE TABLE usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    creadoEn TIMESTAMP DEFAULT NOW()
)

CREATE TABLE categoria(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario_id INT REFERENCES usuario(id) ON DELETE CASCADE
)

CREATE TABLE transacciones(
    id SERIAL PRIMARY KEY,
    monto NUMERIC(12, 2) NOT NULL,
    descripcion TEXT,
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    tipo VARCHAR(10) CHECK (tipo IN ('ingreso','gasto')),
    usuario_id INT REFERENCES  usuario(id) ON DELETE CASCADE,
    catagoria_id INT REFERENCES categoria(id) ON DELETE SET NULL
)