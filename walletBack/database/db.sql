CREATE TABLE usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    creadoEn TIMESTAMP DEFAULT NOW()
)

/*CREATE TABLE usuario(id SERIAL PRIMARY KEY,nombre VARCHAR(100) NOT NULL,email VARCHAR(100) NOT NULL,password VARCHAR(255) NOT NULL,creadoEn TIMESTAMP DEFAULT NOW())*/

CREATE TABLE categoria(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario_id INT REFERENCES usuario(id) ON DELETE CASCADE
)

/*CREATE TABLE categoria(id SERIAL PRIMARY KEY,nombre VARCHAR(100) NOT NULL,usuario_id INT REFERENCES usuario(id) ON DELETE CASCADE)*/

CREATE TABLE transacciones(
    id SERIAL PRIMARY KEY,
    monto NUMERIC(12, 2) NOT NULL,
    descripcion TEXT,
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    tipo VARCHAR(10) CHECK (tipo IN ('ingreso','gasto')),
    usuario_id INT REFERENCES  usuario(id) ON DELETE CASCADE,
    catagoria_id INT REFERENCES categoria(id) ON DELETE SET NULL
)

CREATE TABLE transacciones(id SERIAL PRIMARY KEY,monto NUMERIC(12, 2) NOT NULL,descripcion TEXT,fecha DATE NOT NULL DEFAULT CURRENT_DATE,tipo VARCHAR(10) CHECK (tipo IN ('ingreso','gasto')),usuario_id INT REFERENCES  usuario(id) ON DELETE CASCADE,catagoria_id INT REFERENCES categoria(id) ON DELETE SET NULL)

-- Insertar un usuario
INSERT INTO usuario (nombre, email, password) VALUES ('Juan Pérez', 'juanperez@example.com', '123456'), ('María López', 'marialopez@example.com', 'abcdef'),('Carlos Gómez', 'carlosgomez@example.com', 'qwerty');

-- Insertar una categoría asociada al usuario creado
INSERT INTO categoria (nombre, usuario_id) VALUES ('Alimentación', 1), ('Salario', 2), ('Transporte', 3);

-- Insertar una transacción asociada al usuario y categoría creados
INSERT INTO transacciones (monto, descripcion, tipo, usuario_id, catagoria_id) VALUES (150.75, 'Compra en supermercado', 'gasto', 1, 1), (2500.00, 'Pago mensual de trabajo', 'ingreso', 2, 2), (50.00, 'Recarga de tarjeta de bus', 'gasto', 3, 3);
