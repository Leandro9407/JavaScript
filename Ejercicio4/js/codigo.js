//Condicional reducida
let descuento = true;
let mensaje = descuento == true ? "Descuento" : "Sin descuento";
console.log(mensaje);

let numero = 5;
let operacion = numero > 2 ? "Numero es mayor" : "Numero es menor";
console.log(operacion);


//While
let mis_parrafos = "";
let i = 0;
while (i<=10){
    mis_parrafos += '<p>' + i + '</p>';
    i++;
}
document.getElementById("respuesta").innerHTML = mis_parrafos;


//Do while
let num = 0;
do {
    console.log("Valor del número: " + num);
    num += 10;
}while (num <= 100);


//funcion tradicional con recursividad (funcion que se llama asi mismo)  NOTA: NO SE USA, SOLO PARA OPERACIONES MUY ESPECIFICAS
function calcularFactorial(num){
    if (num === 0 | num === 1){
        return 1;
    } else {
        return num * calcularFactorial(num - 1);
    }
}

let resultado = calcularFactorial(5);
console.log(resultado);


//funcion flecha (arrow function)
const calcularFactorialFlecha = (n) => {
    if (n === 0 || n === 1){
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}


//funcion flecha
const unValor = () => { return 3 + 5 };
console.log(unValor());


//funcion flecha
const otroValor = () => 4 + 7;
console.log(otroValor());


//funcion flecha
const valorOtro = (n1, n2) => n1 + n2;
console.log(valorOtro(2, 8));


//Arrays
let frutas = ["Manzana", "Banano", "Cereza"];
document.getElementById("arraysFrutas").innerHTML = frutas;

let listaFrutas = `<ul>
                <li>`+ frutas[0] +`</li>
                <li>`+ frutas[1] +`</li>
                <li>`+ frutas[2] +`</li>
                </ul> `

document.getElementById("lista").innerHTML = listaFrutas;


//Tipos de creacion arreglos
let letras = ['a', 'b', 'c'];
let letras2 = new Array('a', 'b','c');


//Modificar elementos del array
frutas[1] = "Mango";
console.log(frutas);


//Para calcula el tamaño o la posicion del arreglo
let tamanio = frutas.length;
console.log(tamanio);


//agregar array
frutas.push("Mandarina");
console.log(frutas);


//Eliminar el ultimo dato del arreglo
frutas.pop();
console.log(frutas);


//Eliminar el primer dato del array
frutas.shift();
console.log(frutas);


//agregar el primer dato de un array
frutas.unshift("Uva");
console.log(frutas);


//FOREACH para recorrer un array; ejecuta una funcion para cada elemento del arrays.  NOTA: SE PONEA LA FUNCION DENTRO DEL FOREACH
let filas = "";

frutas.forEach(function(elemento, indice){
    filas += "<tr>";
        filas += "<td style='border: 1px black solid;'>" + indice + " - " + elemento + "</td>";
    filas += "</tr>";
});

document.getElementById("datos").innerHTML = filas;

//MAP otra manera de recorrer un arreglo. NOTA: LA FUNCION SE HACE DENTRO DEL MAP
let numeritos = [11, 27 ,39, 45];
let dobles = numeritos.map(function(numero) {

  return numero * 2;
});


//Map recorrer
dobles.map(function(elemento){
    console.log(elemento);
});


//INDEXOF para buscar el indice
let dato = "Cereza";

let pos = frutas.indexOf(dato);
console.log(pos);

 





