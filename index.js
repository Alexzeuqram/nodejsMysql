const express = require("express"),
  app = express(),
  puerto = process.env.PORT || 3000; 
  (mysql = require("mysql")),
  (bodyParser = require("body-parser")),
  (myConnection = require("express-myconnection")),
  (db = require("./database").config),
  (cors = require("cors"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(myConnection(mysql, db));
app.use(cors());

articulo = require("./routes/articulo");

app.use("/articulos", articulo);

app.listen(puerto, (err) => {
  if (err) {
    console.log(`Tenemos error ${err}`);
  } else {
    console.log(`Todo bien en el puerto ${puerto}`);
  }
});
