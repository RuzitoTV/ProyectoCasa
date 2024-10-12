var mysql = require('mysql2')

var conexion = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'casaazul'
})

conexion.connect(function (error) {
  if (error)
    console.log('Problemas de conexion con mysql')
  else
    console.log('Conexion con Base de Datos iniciada exitosamente.')
})


module.exports = conexion