let DATABASE_URL = {
database: "node",
user: "u22tm7vntgiqwwx8jtqh",
host: "aws.connect.psdb.cloud",
password: "pscale_pw_Ymh6qcMHev22K3ETwwCKoxV0WJYMNWj59LeOLPGQ09U"
  
  
  
  };
  
  let config = `mysql://${DATABASE_URL.user}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;
  
  exports.config = config;
  
