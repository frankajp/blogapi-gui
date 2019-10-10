
  function registrar() {
  
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
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
      .then(Respuesta => console.log(Respuesta))
      .catch(error => console.log(error));
  }
  window.onload = function () {
  
        document.getElementById("registro").addEventListener('click', function () {
      registrar();
    });
  }