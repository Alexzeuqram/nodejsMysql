let DATABASE_URL = {
    database: "node",
    username: "w1i4143lez22u2l0ntih",
    host: "aws.connect.psdb.cloud",
    password: "pscale_pw_WCcDLS5Sh1JTzAYaYpjx2wlDgCi6dUnAGAloVAzCXxE"
};

// Crear la URL de conexión con configuración SSL
let config = {
    host: DATABASE_URL.host,
    user: DATABASE_URL.username,
    password: DATABASE_URL.password,
    database: DATABASE_URL.database,
    ssl: {
        rejectUnauthorized: true
    }
};

// Convertir el objeto config a una cadena de conexión URI
let DATABASE_URL_STRING = `mysql://${config.user}:${config.password}@${config.host}/${config.database}?ssl=${encodeURIComponent(JSON.stringify(config.ssl))}`;

// Exportar la configuración de conexión y la cadena de conexión URI
exports.config = config;
exports.DATABASE_URL = DATABASE_URL_STRING;
