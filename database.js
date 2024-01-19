let DATABASE_URL = {
	database: "node",
username: "r0tl3m3lz8ukh3ipd722",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_sxCSz0GtDTZuzZ5KNO28fi2CJ0bQV1NNILer7jjJh6T"
  
	  
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
