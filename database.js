let DATABASE_URL = {
    host: "aws.connect.psdb.cloud",
    user: "51bsvrthdtdefbbn43cu",
    password: "pscale_pw_8LRvF8prkNnl9VGc3uBwcNnULiF96VoaXo7vCcBNpjI",
    database: "node",
};



// Crear la URL de conexión
let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;

// Exportar la URL de conexión


exports.config = config;
