let DATABASE_URL = {
	database: "node",
	username: "w9dsnyag4u23qgxy52j7",
	host: "aws.connect.psdb.cloud",
	password: "pscale_pw_QbgzX9BM5QrxKIJMqHdq2uk4ck230oE6Bk9NXjZP97R"
	  
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
