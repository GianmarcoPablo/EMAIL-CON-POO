const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const btnEnviar = document.querySelector('#enviar');

const ui = new UI();

eventListeners()
function eventListeners(){
    nombre.addEventListener("input",validarFormulario);
    correo.addEventListener("input",validarFormulario);
    telefono.addEventListener("input",validarFormulario);
    formulario.addEventListener("submit",enviarFormulario);
    nombre.addEventListener("blur",agregarBordes);
    correo.addEventListener("blur",agregarBordes);
    telefono.addEventListener("blur",agregarBordes);
}

class UI{
    mostrarAlerta(mensaje,tipo){
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("mensaje","error-message");
        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }else{
            divMensaje.classList.add("alert-success");
        }
        divMensaje.textContent = mensaje;
        const errores = document.querySelectorAll(".error-message");
        if(errores.length === 0){
            formulario.appendChild(divMensaje);
        }
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }
}

const formularioObj = {
    nombre: "",
    correo: "",
    telefono: ""
}

function validarFormulario(e){
    formularioObj[e.target.name] = e.target.value;
}

function enviarFormulario(e){
    e.preventDefault();
    const {nombre,correo,telefono} = formularioObj;
    if(nombre === "" || correo === "" || telefono === ""){
        ui.mostrarAlerta("Todos los campos son obligatorios","error");
        return;
    }
    if(nombre.length < 3){
        ui.mostrarAlerta("El nombre debe tener al menos 3 caracteres","error");
        return;
    }
    ui.mostrarAlerta("Datos enviados correctamente","correcto");
    formulario.reset();
}

function agregarBordes(e){
    if(e.target.value === ""){
        e.target.classList.add("error");
        e.target.classList.remove("correcto");
    }
    else{
        e.target.classList.remove("error");
        e.target.classList.add("correcto");
    }

}
