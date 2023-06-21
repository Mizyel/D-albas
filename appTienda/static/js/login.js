function login(){
    var user,password

    user= document.getElementById("usuario").value;
    password=document.getElementById("contraseña").value;

    if(user=="prueba" && password=="1234"){
        window.location.href='inicioUsuario.html';
    }else{
        alert("Datos incorrectos")
    }

    // if(user=="user"&&password=="1234"){
    //     window.location.href='inicioUsuario.html';
    // }else if(user=="admin"&&password=="12345"){
    //     window.location.href='Admin.html';
    // }else{
    //     alert("Datos incorrectos");
    // }
}