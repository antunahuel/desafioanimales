import Propietario from "./assets/js/Propietario.js";
import Datosmascota from "./assets/js/DatosMascota.js";

let propietarios = [];

const mostrarDatos =(datos = [])=>{
    let listaPacientes = document.querySelector("#resultado ul");
    let lista = " ";

    for (const propietario of datos) {
        for (const mascotas of propietario.mascotas) {
            lista += `<li>${propietario.datosPropietario()} - ${mascotas.datos()}</li>`
        }
    }

    listaPacientes.innerHTML=lista;
}


// capturando elementos formulario

const formularioRegistro = document.getElementById("formRegistro");


formularioRegistro.addEventListener("submit",(event)=>{
    event.preventDefault();

    //datos propietario
    let propietario = document.getElementById("propietario");
    let telefono = document.getElementById("telefono");
    let direccion = document.getElementById("direccion");

    //datos mascota
    let tipo = document.getElementById("tipo");
    let nombreMascota = document.getElementById("nombreMascota");
    let consulta = document.getElementById("enfermedad");

    //instancia propietario

    let datosPropietario = new Propietario (propietario.value, direccion.value, telefono.value);

    //instancia mascota
    let datosMascota = new Datosmascota (tipo.value,nombreMascota.value,consulta.value);



    datosPropietario.agregarMascota(datosMascota);
    console.log(datosPropietario.mascotas);


    propietarios.push(datosPropietario);

    mostrarDatos(propietarios);


});

