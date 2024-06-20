function permiso_ingreso(){
    const resultado = document.getElementById("resultado_edad");
    let edad = document.getElementById("edad").value;
    if (edad>17){
        resultado.innerHTML = "Puede ingresar";
    } else {
        resultado.innerHTML = "A dormir, cagón";
    }
}

function validar_numero(){
    const validacion = document.getElementById("resultado_numero");
    let comprobacion = document.getElementById("numero").value;
    
    if (comprobacion%2==0 && comprobacion>0){
        validacion.innerHTML = "El número " + comprobacion + " es: par y positivo";
    } else if (comprobacion%2==0 && comprobacion<0){
        validacion.innerHTML = "El número " + comprobacion + " es: par y negativo";
    } else if (comprobacion%2==1 && comprobacion>0){
        validacion.innerHTML = "El número " + comprobacion + " es: impar y positivo";
    } else{
        validacion.innerHTML = "El número " + comprobacion + " es: impar y negativo";
    }

}

function imprimir_pares(){
    const pares = document.getElementById("resultado_conteo");
    let par = document.getElementById("contador").value;
    par = parseInt(par)
    let resultado = '';

    if (par%2 == 1 | par%2 == -1){
        par++;
    }

    if (par>=100){
        alert("El número debe ser menor a 100");
    }

    for (let i = par; i<=100; i=i+2){
        if (i != 0){
            resultado += '<p>'+ i + '</p>';
        }
    }

    pares.innerHTML = resultado;

}