let DATABASE_URL = {
database: "node",
username: "nhdt2yjcmwp3rwe8mxrl",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_zVZLLRlSjodHjXGVpQHdsAGPA4lKKdzf5KUN9KzGuSN"
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
