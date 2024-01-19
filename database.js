let DATABASE_URL = {
database: "node",
username: "y9nr6d22g51kj6ti7sfc",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_guWV07O8tejkwQVqw6aFEd7GRSF50GASIX3crS6UGpv"
  
  
	  
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
