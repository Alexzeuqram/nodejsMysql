let DATABASE_URL = {
database: "node",
username: "76i8y40hwtjfl9pirus2",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_QYtcWjHZUzIAuAcG6bSQmZzk9Jks0iUm8bAqMli9Ggt"
  
};

let config = {
    host: DATABASE_URL.host,
    user: DATABASE_URL.username,
    password: DATABASE_URL.password,
    database: DATABASE_URL.database,
    ssl: {
        rejectUnauthorized: true
    }
};

let DATABASE_URL_STRING = `mysql://${config.user}:${config.password}@${config.host}/${config.database}?ssl=${encodeURIComponent(JSON.stringify(config.ssl))}`;

exports.config = config;
exports.DATABASE_URL = DATABASE_URL_STRING;
