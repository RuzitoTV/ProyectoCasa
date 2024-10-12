var express = require('express');
var router = express.Router();
var bd = require('./bd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vistaadmin', { title: 'Vista: Admin - Panel' });
});

//FUNCION DE LISTADO DE PROFESORES EN VISTA ADMINISTRADOR
router.get('/vistaadminprofes', function (req, res, next) {
  bd.query('SELECT Run_Fun, Nombre_Fun, Apellido_Fun, Email_Fun, telefono FROM profesores ORDER BY Apellido_Fun ASC;', function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('vistaadminprofes', { profesores: filas })
  })
})

//FUNCION DE LISTADO DE ESTUDIANTES EN VISTA ADMINISTRADOR
router.get('/vistaadminestudiantes', function (req, res, next) {
  bd.query('SELECT Run_Est, Nombre_Est, Segundo_Nombre_Est, Apellido_Est, Email_Est, Telefono_Fijo_Est, Telefono_Movil_Est from estudiantes ORDER BY Apellido_Est ASC;', function (error, filas) {
    if (error) {
      console.log('error en el listado');
      return;
    }
    res.render('vistaadminestudiantes', {
      estudiantes: filas,
      title: 'Vista: Admin - Estudiantes' // Aquí defines el título
    });
  });
});


module.exports = router;