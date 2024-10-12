var express = require('express');
var router = express.Router();
var bd = require('./bd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vistaadminestudiantes', { title: 'Vista: Admin - Estudiantes' });
});

//
router.get('/modificar/:run', function (req, res, next) {
  const run = req.params.run;

  bd.query('SELECT * FROM estudiantes WHERE Run_Est = ?', [run], function (error, filas) {
    if (error) {
      console.log('Error en la consulta:', error);
      return res.render('error', { mensaje: 'Error en la consulta' });
    }

    if (filas.length > 0) {
      // Renderizamos el formulario de modificación con los datos del estudiante
      res.render('modificar', { estudiantes: filas })
    } else {
      // Si no se encuentra el RUN, mostramos un mensaje de error
      res.render('mensaje', { mensaje: 'No existe el estudiante con el RUN ingresado' });
    }
  });
});


module.exports = router;