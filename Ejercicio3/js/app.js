function operacion(){
    const sumatoria = document.getElementById("generar");

    let ingresar = parseInt (document.getElementById("cantidad").value);
    let generando = "";

    for (let i=0; i<ingresar; i++){  

      if (ingresar>1){
      
        generando += "<div class='col-1'>";
        generando += "<input type='number' class='form-control border-primary-subtle' id='numeros" + i + "'></input>";   
        generando += "</div>";

      }  else {

         alert("Debes generar más de 1 cuadro");
      }
      
    }

    sumatoria.innerHTML = generando; 
}

function operacion_matematica(){
    const resultado = document.getElementById("matematica");

    let opciones = document.getElementById("opcion").value;
    let generado = parseInt (document.getElementById("cantidad").value);
    let evaluar = 0;
    let cuadro_resultado = "";

    for (let i=0; i<generado; i++){

      if (opciones==1){
        let operando = parseInt (document.getElementById("numeros" + i).value);
        evaluar += operando;

      } else if (opciones==2){
        let operando = parseInt (document.getElementById("numeros" + i).value);
        evaluar -= operando;
         
      } else if (opciones==3){
        let operando = parseInt (document.getElementById("numeros" + i).value);
        evaluar = operando;
        evaluar *= operando;

      } else if (opciones==4){
        evaluar= parseInt ("numeros" + i);
        let operando = parseInt (document.getElementById("numeros" + i).value);
        evaluar /= operando;
      }

    }

    cuadro_resultado += "<div class='col-1'>";
    cuadro_resultado += '<input type="text" class="form-control border-primary" placeholder="' + evaluar + '"></input>'
    cuadro_resultado += "</div>";

    resultado.innerHTML = cuadro_resultado;
}