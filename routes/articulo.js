const express = require("express");

const router = express.Router();
const multer = require("multer");
const artController = require("../controllers/articuloController");
const artValidator = require("../validations/articValidator");

const almacenamiento = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./imagenes/articulos/");
  },

  filename: function (req, file, cb) {
    cb(null, "articulo" + Date.now() + file.originalname);
  },
});

const subidas = multer({ storage: almacenamiento });

router.get("/articulos/:ultimos?", artController.getArt);
router.get("/articulo/:id", artController.getArticulo);
router.post("/crear", artValidator.add, artController.postArt);
router.delete("/articulo/:id", artController.deleteArt);
router.put("/articulo/:id", artController.putArt);
router.post("/subir-imagen/:id", subidas.single("file0"), artController.subir);
router.get("/imagen/:fichero", artController.imagen);
router.get("/buscar/:busqueda", artController.buscador);

module.exports = router;
