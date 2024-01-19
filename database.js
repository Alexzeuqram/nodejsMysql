let DATABASE_URL = {
database: "node",
username: "q1w6b18huiayf07cqrie",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_HlHrbKQr6PcFu9lfrYOEQY72EyBmMMoFiHxnPWNEZoA"

};

let config = `mysql://${DATABASE_URL.username}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;


exports.config = config;
