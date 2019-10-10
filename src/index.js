
function login() {

  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("password").value;


  var data = {
    username: correo,
      email: correo,
      password: contrasena

  };

  fetch(API_PATH + ' / login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type ": "aplication / json"
    }
  })
    .then(res => res.json())
    .then(Respuesta => consola.log(Respuesta))
    .catch(error => consola.log(error));
}
function registrar() {

  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("password").value;
  var nombre = document.getElementById("nombre").value;


  var data = {
    name: nombre,
    email: correo,
    password: contrasena

  };

  fetch(API_PATH + '/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type ": "aplication/json"
    }
  })
    .then(res => res.json())
    .then(Respuesta => consola.log(Respuesta))
    .catch(error => consola.log(error));
}
window.onload = function () {

  document.getElementById("envios").addEventListener('click', function () {
    login();
  });
  document.getElementById("registro").addEventListener('click', function () {
    registrar();
  });
}