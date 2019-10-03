function login() {
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var data = {
        username: correo,
        email: correo,
        password: contrasena
    };
    fetch(API_PATH+'/login',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(Response => console.log(Response))
    .catch(error => console.log(error));

}

window.onload = function () {
    document.getElementById("envios").addEventListener('click', function () {
        login();
    });
}