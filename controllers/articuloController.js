const fs = require("fs");
let controller = {};
let format = require("../format").format;
const res = require("express/lib/response");
const path = require("path");
const Articulo = require("../modelos/Articulo");
const { Op } = require("sequelize");
const sizeOf = require('image-size');
const tiposDeImagenAdmitidos = ['image/jpeg', 'image/png'];

controller.getArt = (req, res) => {
  let consulta = "";

  if (req.params.ultimos) {
    consulta = " LIMIT 3";
  }

  const sql = "SELECT * FROM articulos ORDER BY fecha DESC" + consulta;
  req.getConnection((error, conn) => {
    if (error) {
      format.code = 500;
      format.message = "Error al contactar la base de datos,";
      format.success = false;
      res.status(500);
      res.json(format);
    } else {
      conn.query(sql, [req.query.id], (err, results) => {
        if (err) {
          format.code = 400;
          format.message = err.sqlMessage;
          format.success = false;
          res.status(400);
          res.json(format);
        } else {
          format.code = 200;
          format.message = "Success";
          format.success = true;
          format.data = results;
          res.status(200);
          res.json(format);
        }
      });
    }
  });
};

controller.postArt = (req, res) => {
  const sql = "INSERT INTO articulos SET ?";
  req.getConnection((error, conn) => {
    if (error) {
      format.code = 500;
      format.message = "Error al contactar la base de datos";
      format.success = false;
      res.status(500);
      res.json(format);
    } else {
      conn.query(sql, [req.body], (err, results) => {
        if (err) {
          format.code = 400;
          format.message = err.sqlMessage;
          format.success = false;
          res.status(400);
          res.json(format);
        } else {
          format.code = 201;
          format.message = "User add";
          format.success = true;
          format.data = results.insertId;
          res.status(201);
          res.json(format);
        }
      });
    }
  });
};

controller.getArticulo = (req, res) => {
  const sql = "SELECT * FROM articulos WHERE id = ?";
  req.getConnection((error, conn) => {
    if (error) {
      format.code = 500;
      format.message = "Error al contactar la base de datos";
      format.success = false;
      res.status(500);
      res.json(format);
    } else {
      conn.query(sql, [req.params.id], (err, results) => {
        if (err) {
          format.code = 400;
          format.message = err.sqlMessage;
          format.success = false;
          res.status(400);
          res.json(format);
        } else {
          format.code = 200;
          format.message = "Success";
          format.success = true;
          format.data = results;
          res.status(200);
          res.json(format);
        }
      });
    }
  });
};

controller.deleteArt = (req, res) => {
  const sql = "DELETE from articulos WHERE id = ?";
  req.getConnection((error, conn) => {
    if (error) {
      format.code = 500;
      format.message = "Error al contactar la base de datos,";
      format.success = false;
      res.status(500);
      res.json(format);
    } else {
      conn.query(sql, [req.params.id], (err, results) => {
        if (err) {
          format.code = 400;
          format.message = err.sqlMessage;
          format.success = false;
          res.status(400);
          res.json(format);
        } else {
          if (results.affectedRows > 0) {
            format.code = 204;
            format.message = "Articulo eliminado";
            format.success = true;
            format.data = results;
            res.status(204);
            res.json(format);
          } else {
            format.code = 404;
            format.message = "Error al eliminar el articulo";
            format.success = false;
            format.data = results;
            res.status(404);
            res.json(format);
          }
        }
      });
    }
  });
};
controller.putArt = (req, res) => {
  const sql = "UPDATE articulos SET ? WHERE id = ?";
  req.getConnection((error, conn) => {
    if (error) {
      format.code = 500;
      format.message = "Error al contactar la base de datos,";
      format.success = false;
      res.status(500);
      res.json(format);
    } else {
      conn.query(sql, [req.body, req.params.id], (err, results) => {
        if (err) {
          format.code = 400;
          format.message = err.sqlMessage;
          format.success = false;
          res.status(400);
          res.json(format);
        } else {
          if (results.affectedRows > 0) {
            format.code = 200;
            format.message = "Articulo actualizado";
            format.success = true;
            format.data = results;
            res.status(200);
            res.json(format);
          } else {
            format.code = 404;
            format.message = "Error al actualizar";
            format.success = false;
            format.data = results;
            res.status(404);
            res.json(format);
          }
        }
      });
    }
  });
};

controller.subir = (req, res) => {
  if (!req.file && !req.files) {
    return res.status(404).json({
      status: "error",
      mensaje: "Petición inválida",
    });
  }

  let archivo = req.file.originalname;

  let archivo_split = archivo.split(".");
  let extension = archivo_split[1];

  if (
    extension !== "png" &&
    extension !== "JPG" &&
    extension !== "jpg" &&
    extension !== "jpeg" &&
    extension !== "gif"
  ) {
    fs.unlink(req.file.path, (error) => {
      return res.status(400).json({
        status: "error",
        mensaje: "Imagen inválida",
      });
    });
  } else {
    let articuloId = req.params.id;

    const sql = "UPDATE articulos SET imagen = ? WHERE id = ?";
    req.getConnection((error, conn) => {
      if (error) {
        return res.status(500).json({
          status: "error",
          mensaje: "Error al conectar a la base de datos",
        });
      }

      conn.query(sql, [req.file.filename, articuloId], (err, result) => {
        if (err || result.affectedRows === 0) {
          fs.unlink(req.file.path, (unlinkError) => {
            return res.status(500).json({
              status: "error",
              mensaje: "Error al actualizar la imagen",
            });
          });
        } else {
          return res.status(200).json({
            status: "success",
            mensaje: "Imagen actualizada exitosamente",
            fichero: req.file,
          });
        }
      });
    });
  }
};

controller.imagen = (req, res) => {
  const nombreFichero = req.params.nombreFichero;
  const rutaFisica = `./imagenes/articulos/${nombreFichero}`;

  fs.readFile(rutaFisica, (error, datos) => {
    if (error) {
      return res.status(404).json({
        status: "error",
        mensaje: "La imagen no existe",
        existe: false,
        fichero: nombreFichero,
        rutaFisica: rutaFisica,
      });
    }

    const dimensiones = sizeOf(datos);

    if (!dimensiones || !tiposDeImagenAdmitidos.includes(dimensiones.type)) {
      return res.status(400).json({
        status: "error",
        mensaje: "Formato de imagen no admitido",
        fichero: nombreFichero,
        rutaFisica: rutaFisica,
      });
    }

    return res.sendFile(path.resolve(rutaFisica));
  });
};

controller.buscador = (req, res) => {
  const busqueda = req.params.busqueda;

  Articulo.findAll({
    where: {
      [Op.or]: [
        { titulo: { [Op.like]: `%${busqueda}%` } },
        { contenido: { [Op.like]: `%${busqueda}%` } },
      ],
    },
    order: [["fecha", "DESC"]],
  })
    .then((articulosEncontrados) => {
      if (!articulosEncontrados || articulosEncontrados.length === 0) {
        return res.status(404).json({
          status: "error",
          mensaje: "No se han encontrado artículos",
        });
      }

      return res.status(200).json({
        status: "success",
        articulos: articulosEncontrados,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        status: "error",
        mensaje: "Error en la búsqueda de artículos",
        error: error.message,
      });
    });
};

module.exports = controller;
