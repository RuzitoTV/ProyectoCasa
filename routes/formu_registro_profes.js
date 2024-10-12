var express = require('express');
var router = express.Router();
var bd = require('./bd')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('formu_registro_profes', { title: 'Vista: Admin - Registro Profesores' });
});

router.get('/registro', function (req, res, next) {
    res.render('formu_registro_profes')
  })
  
  
  router.post('/registro', function (req, res, next) {
    const registro = {
      run_fun: req.body.run_fun,
      nombre_fun: req.body.nombre_fun,
      apellido_fun: req.body.apellido_fun,
      email_fun: req.body.email_fun,
      contrasena: req.body.contrasena
  
    }
    bd.query('insert into profesores set ?', registro, function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
    res.render('mensajeregistro', { mensaje: 'La carga se efectuo correctamente' })
  })


module.exports = router;
