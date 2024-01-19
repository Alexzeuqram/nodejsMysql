let DATABASE_URL = {
    host: "aws.connect.psdb.cloud",
    user: "j8nbh2x7l426fy132chb",
    password: "pscale_pw_pLvgoIGQuuRWnJsvJ4lP0nhFzz3gR2ju0gIyYdJBckI",
    database: "node",
};



// Crear la URL de conexión
let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;

// Exportar la URL de conexión


exports.config = config;
