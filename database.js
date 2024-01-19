let DATABASE_URL = {
    database: "node",
    user: "3vfc8yg1hraub6zumjx4", // Cambiado de "username" a "user"
    host: "aws.connect.psdb.cloud",
    password: "pscale_pw_1qtjdi5mce8bweOivBjyccGjdg5XHgHK4Q8ty8mbwsE"
  };
  
  let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;
  
  exports.config = config;
  