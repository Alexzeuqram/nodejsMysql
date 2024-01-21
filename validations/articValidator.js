const { check, validationResult } = require("express-validator");

const generateArtValidators = () => [
  check("titulo")
    .notEmpty()
    .isLength({ max: 200 })
    .withMessage("Titulo invalido"),
  check("contenido")
    .notEmpty()
    .isLength({ max: 500 })
    .withMessage("Contenido invalido"),
];
const generateIdValidators = () => [
  check("id").notEmpty().isNumeric().withMessage("Id invalido"),
];

const updateArtValidators = () => [
  check("id").notEmpty().isNumeric().withMessage("Id invalido"),
  check("titulo")
    .notEmpty()
    .isLength({ max: 20 })
    .withMessage("Titulo invalido"),
  check("contenido")
    .notEmpty()
    .isLength({ max: 50 })
    .withMessage("Contenido invalido"),
];

const reporter = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      succes: false,
      code: 404,
      message: errors,
      date: [],
    });
  }
  next();
};

module.exports = {
  add: [generateArtValidators(), reporter],
  id: [generateIdValidators(), reporter],
  update: [updateArtValidators(), reporter],
};
