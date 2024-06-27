function costo_total(){
    const total = document.getElementById("total_pagar");
    let valor = parseInt(document.getElementById("valor_moto").value);
    let interes = parseFloat(document.getElementById("interes_moto").value);
    let cuota = parseInt(document.getElementById("cuota_moto").value);

    let tasaInteres = valor * (interes/100);
    let pagoMensual = (valor / cuota) + tasaInteres;
    let resultado = (pagoMensual * cuota);

    total.innerHTML = resultado;
} 