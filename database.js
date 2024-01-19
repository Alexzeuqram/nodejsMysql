let DATABASE_URL = {
    host: "aws.connect.psdb.cloud",
    user: "2cl8pili501kc9hyecsn",
    password: "pscale_pw_1vPairM2izLkhuYwP2WIFNDotKCll4EfqKAINkpdP5q",
    database: "node",
};

// Crear la URL de conexión
let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;

// Exportar la URL de conexión


exports.config = config;