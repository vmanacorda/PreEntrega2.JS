

const Doctor = function(nombre, apellido, especializacion){
    this.nombre= nombre
    this.apellido = apellido
    this.especializacion = especializacion
}
let doctor1  = new Doctor("Gomez","Juan","Medico clinico")
let doctor2  = new Doctor("martinez","gonzalo","Pediatra")
let doctor3  = new Doctor("lopes","carlos","Radiologo")
let doctor4 = new Doctor("perez","Monica","Oftalmologa")


let lista = [doctor1,doctor2,doctor3,doctor4]
lista.forEach( Doctor => {
    console.log(`Nombre: ${Doctor.nombre}, Apellido: ${Doctor.apellido}, Especializacion: ${Doctor.especializacion}`);
})
function filtrarDoctor(){ 
    let palabraClave = prompt("Ingresa el especialista que buscas").trim();

    if (palabraClave === "") { 
        alert("No se encontro especialista");
        return;
    }

    let Resultado = lista.filter((x) => x.nombre.toUpperCase().includes(palabraClave.toUpperCase()));

    if (Resultado.length > 0) {
        console.table(Resultado)
    } else {
        alert("No se encontró especialista")
    }
}

function agregarDoctor(){
let nombre= prompt("Ingresa el Nombre del Especialista")
let apellido = prompt("ingresa el Apellido del Especialista")
let especializacion = prompt("ingresa la especialidad")
 

if (nombre === "" || apellido === "" || especializacion === "") {
    alert("Por favor ingrese valores válidos");
    return;

}
let nuevoDoctor = new Doctor (nombre,apellido,especializacion)
lista.push(nuevoDoctor)
console.table(lista)
}

    