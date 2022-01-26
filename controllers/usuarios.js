const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = 'no name'} = req.query;

  res.json({
    msg: "Peticion GET - Controller",
    q,
    nombre
  });
};

const usuariosPost = (req, res = response) => {
  // Recibo los argumentos que me mandan en el cuerpo del request
  const { nombre, edad } = req.body;

  res.json({
    msg: "Peticion POST - Controller",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "Peticion PUT - Controller",
    id
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Peticion PATCH - Controller",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Peticion DELETE - Controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
