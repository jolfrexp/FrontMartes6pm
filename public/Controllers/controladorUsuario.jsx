import buscarUsuario from "../../src/services/serviciosUsuario.jsx"


// //Objetivo: recoger los datos de un formulario
// //utilizando jsx
// //1.-a cada input, select, textarea del form

// import { _isClickEvent } from "chart.js/helpers"

// //le creo una variable asociada al id del hmtl
// let nombre = document.getElementById("nombre")
// let edad = document.getElementById("edad")
// let ciudad = document.getElementById("ciudad")
// let telefono = document.getElementById("telefono")
// let correo = document.getElementById("correo")
// let password = document.getElementById("contraseña")

// //se crea una variable para asociarla con el boton del formulario
// let botonRegistro = document.getElementById("boton-registros")
// //3.- se detecta el click del boton del formulario
// botonRegistro.addEventListener("click",function(evento){
//     evento.preventDefault() 
//     Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//       });
// })
//Objetivo: Renderizar Datos que vienen del back
//1.-se queman los datos(Mock)
buscarUsuario()
let usuarios = [
    {id:30,nombre:"Jolfre",correo:"jolfre@gmail.com",fechaRegistro:"09-10-24"},
    {id:43,nombre:"Andrea",correo:"Andrea@gmail.com",fechaRegistro:"04-02-23"},
    {id:54,nombre:"Jose",correo:"Jose@gmail.com",fechaRegistro:"03-02-23"}
]
//2.-Recorrer el arreglo de datos del back
let fila = document.getElementById("fila")
usuarios.forEach(function(usuario){
    console.log(usuario)
    //2.1.- Traversing 
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")
    let nombrecard = document.createElement("h3")
    nombrecard.textContent=usuario.nombre
    //2.2 se asocian las creaciones 
    tarjeta.appendChild(nombrecard)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})