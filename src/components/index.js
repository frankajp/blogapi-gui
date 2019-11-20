import './bootstrap/dist/css/bootstrap.min.css';

function login() {

  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("password").value;


  var data = {
    username: correo,
    email: correo,
    password: contrasena

  };

  fetch(API_PATH + '/login', {
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
 
}