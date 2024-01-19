let DATABASE_URL = {
    database: "node",
    user: "u2yz42m01piwcn7tjkbh",
    host: "aws.connect.psdb.cloud",
    password: "pscale_pw_7MC51DksvyChzJO5cWresZSDdtHNbKrPUXD4zcA7KSc"
  
  };
  
  let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;
  
  exports.config = config;
  