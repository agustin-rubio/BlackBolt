//#region inicio
const inicio = document.getElementById("inicio");
const mail_log = document.getElementById("imputemaillog");
const pass_log = document.getElementById("imputpasslog");
const error_en_blanco =document.getElementById("error_en_blanco");
const logout = document.getElementById("logout");
const administrar = document.getElementById("admin");
const cerrar_modal = document.getElementById("cerrar");
const inicio_registro = document.getElementById("inicio_reg");
let mail_in = "";
let pass_in= "";

const user_admin = "blackbolt";
const pass_admin = "admin";


inicio.addEventListener("click",function(e){
    const usuario_local_storage = JSON.parse(localStorage.getItem("usuario"));
    e.preventDefault();
    if (user_admin == mail_in && pass_admin == pass_in){
        error_en_blanco.style.display = "none";
        administrar.style.display = "block";
        logout.style.display = "block";
        inicio_registro.style.display="none";
        swal("Bienvenido!", "Ahora tienes el rol de administrador.", "success");
        localStorage.setItem("sesion", JSON.stringify({
            sesion:"false",
            sesion_admin:"true",
    }));
        cerrar_modal.click();
    }else if (usuario_local_storage.mail!=mail_in || usuario_local_storage.password!=pass_in){
        error_en_blanco.style.display = "block";
        administrar.style.display = "none";
        error_en_blanco.innerHTML="Los datos no coinciden.";
        inicio_registro.style.display="block";
    }else {
        error_en_blanco.style.display = "none";
        administrar.style.display = "none";
        logout.style.display = "block ";
        inicio_registro.style.display="none";
        swal("Bienvenido!", "Nos alegra tenerte aquí.", "success");
        localStorage.setItem("sesion", JSON.stringify({
            sesion:"true",
            sesion_admin:"false",
    }));
        cerrar_modal.click();
    }
})

window.onload = function(){
    const sesion_iniciada = JSON.parse(localStorage.getItem("sesion"));
    if (sesion_iniciada.sesion_admin=="true"){
        administrar.style.display = "block";
        inicio_registro.style.display="none";
        logout.style.display = "block ";
    }else if (sesion_iniciada.sesion=="true"){
        inicio_registro.style.display="none";
        logout.style.display = "block ";
    }else {
        administrar.style.display = "none";
        logout.style.display = "none ";
    }
}

mail_log.addEventListener("change",function(e){
    mail_in=e.target.value
})
pass_log.addEventListener("change",function(e){
    pass_in=e.target.value
})

logout.addEventListener("click",function(e){
    e.preventDefault;
    logout.style.display = "none";
    administrar.style.display = "none";
    error_en_blanco.style.display = "block";
    inicio_registro.style.display="block";

    swal({
        title: "Hasta la próxima!",
        text: "Se ha cerrado tu sesión.",
        type: "info",
        timer: 3000,
        buttons: false
        }).then (function(){
            window.location.href = "../index.html";
    });

    localStorage.setItem("sesion", JSON.stringify({
        sesion:false ,
        sesion_admin:false,
}));
})
//#endregion
