let DATABASE_URL = {
    host: "aws.connect.psdb.cloud",
    user: "3tn8tsbg6oc84fg9m8vf",
    password: "pscale_pw_P3Gl8fLnoYCtR08enPNyFmiAukdUCGzR0Sn9UDRnT6V",
    database: "node",
};


// Crear la URL de conexión
let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;

// Exportar la URL de conexión


exports.config = config;
