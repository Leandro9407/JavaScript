//imprimir alerta
alert("Hola Gentusa")
//imprimir en consola (inspeccionar)
console.log("Este es el mensaje de consola")
//imprimir en el documento
document.write("Imprimir en el documento")

//Tipos de datos JS

let palabras = "Lord";
let numeros = 23;
let flotantes = 254.76;
let booleano = true;
let nulos = null;
let valorIndefinido;

console.log(palabras);
console.log(numeros);
console.log(flotantes);
console.log(booleano);
console.log(nulos);
console.log(valorIndefinido);

const URL = "https://github.com";
console.log(URL);

const caja = document.getElementById("ejemplo");
caja.innerHTML = '<h2>' + URL + ' ' + flotantes + '<h2>';

//condicionales

let edad=16;

if (edad>17){
    alert("Puede ingresar");
} else{
    caja.innerHTML = '<h2>Tienes ' + edad + ' años de edad. No puede ingresar</h2>';
};

//funciones

function inicial(fecha){

    alert("Esta es una función" + fecha);
    
}

//para llamar la funcion
inicial(' 20/06/2024?')