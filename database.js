let DATABASE_URL = {
database: "node",
username: "beiou5ryk201v32hge54",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_eSbtKJAF7lzeeJwSYNQf9pYrwvqRQrXTqxfX5y46I8w"
  
	  
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

// Exportar la configuración de conexión
exports.config = config;
