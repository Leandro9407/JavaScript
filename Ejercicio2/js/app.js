function respuesta(){
    const total = document.getElementById("resultado");

    let precio_producto = parseInt (document.getElementById("precio").value);
    let cantidad_producto = parseInt (document.getElementById("cantidad").value);
    let descuento_producto = document.getElementById("descuento").value;

    let valor = (cantidad_producto * precio_producto);

    if (descuento_producto=="si"){
        let descontar = parseFloat(valor * 0.1); 
        let resultado = parseFloat(valor - descontar);

        let mostrar="";
        mostrar += "<p>Descuento: $" + descontar + "</p>";
        mostrar += "<p>Total a pagar: $" + resultado + "</p>";
        total.innerHTML = mostrar;
    } else if (descuento_producto=="no"){
        let resultado_sin = valor;

        total.innerHTML = "Total a pagar $" + resultado_sin;
    }

}