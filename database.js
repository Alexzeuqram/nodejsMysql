let DATABASE_URL = {
database: node,
username: jup11qrb1oc1z2ybu14h,
host: aws.connect.psdb.cloud,
password: pscale_pw_ct6odQjzhk7DusfDchmCIlylKxNFt154AjUfA5oNFCJ

};

let config = `mysql://${DATABASE_URL.username}:${DATABASE_URL.password}@${DATABASE_URL.host}/${DATABASE_URL.database}?ssl={"rejectUnauthorized":true}`;


exports.config = config;
