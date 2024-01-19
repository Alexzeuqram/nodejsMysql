let DATABASE_URL = {
    database: "node",
user: "fg7n3bwl4vqsbn4kyo6a",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_NS9NSzJo0UiFRXB6nfruX1IRtRTmzU9SjD14aMiUFGi"
  
  
  };
  
  let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;
  
  exports.config = config;
  
