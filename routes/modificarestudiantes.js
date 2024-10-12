var express = require('express');
var router = express.Router();
var bd = require('./bd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('modificar', { title: 'Vista: Admin - Estudiantes - Modificar' });
});

router.post('/guardar-cambios', function (req, res) {
    const { Run_Est, Apellido_Est, Nombre_Est, Segundo_Nombre_Est, Email_Est, Telefono_Fijo_Est, Telefono_Movil_Est } = req.body;
  
    const query = `
      UPDATE estudiantes 
      SET Apellido_Est = ?, Nombre_Est = ?, Segundo_Nombre_Est = ?, Email_Est = ?, Telefono_Fijo_Est = ?, Telefono_Movil_Est = ?
      WHERE Run_Est = ?`;
  
    bd.query(query, [Apellido_Est, Nombre_Est, Segundo_Nombre_Est, Email_Est, Telefono_Fijo_Est, Telefono_Movil_Est, Run_Est], function (error, resultado) {
      if (error) {
        console.log('Error al actualizar el estudiante:', error);
        return res.render('modificacionFallida', { mensaje: 'Hubo un error al actualizar el estudiante.' });
      }
  
      res.render('modificacionExito', { mensaje: 'Estudiante actualizado correctamente.' });
    });
  });


module.exports = router;