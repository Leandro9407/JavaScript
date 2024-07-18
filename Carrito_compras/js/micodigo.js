let productos = ["Plátano", "Aguacate", "Café", "Yuca"];
let precios = [2000, 7000, 18000, 3000];
let imagenes = ['img/platano.jpg', 'img/aguacate.jpg', 'img/cafe.jpg', 'img/yuca.jpg'];

// carrito de compras
let descripcion = new Array();
let valor_unitario = [];
let cantidad = [];
let total = [];

let cartas_productos = "";

productos.forEach(function(elemento, indice){
    cartas_productos += `<div class="col-sm-12 col-md-6 col-lg-3 ">
                            <div class="card" style="width: 18rem;">
                            <img src="` + imagenes[indice] + `" class="card-img-top img-fluid" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">` + elemento + `</h5>
                                    <p class="card-text">` + precios[indice] + `</p>
                                    <button onclick="agregar_carrito(`+ indice +`)" class="btn btn-primary">Añadir al carrito</button>
                                </div>
                            </div>
                         </div>`;    

});

document.getElementById("productos").innerHTML = cartas_productos;

function agregar_carrito(index){
    let verificar = descripcion.indexOf(productos[index]);

    if (verificar == -1){
        descripcion.push(productos[index]);
        valor_unitario.push(precios[index]);
        cantidad.push(1);
        total.push(precios[index]);
    } else {
        cantidad[verificar] = cantidad[verificar] + 1;
        total[verificar] = cantidad[verificar] * precios[index];
    }

}  

let filas_carrito = "";

function construir_carrito(){
    let filas_carrito = "";
    let total_general = 0;
    descripcion.forEach(function(e, i){
        filas_carrito += `<tr>
                            <td>`+ e +`</td>
                            <td>$` + valor_unitario[i] +`</td>
                            <td>` + cantidad[i] +`</td>
                            <td>$` + total[i] +`</td>
                            <td><button onclick="eliminar_producto(`+ i +`)" class="btn btn-light">&#128465;</button></td>
                        </tr>`
        total_general = total_general + total[i];
    
    });
    document.getElementById("datos").innerHTML = filas_carrito;
    document.getElementById("total_general").innerHTML = "$" +  total_general;
}

function eliminar_producto(index){
    descripcion.splice(index, 1);
    valor_unitario.splice(index, 1);
    cantidad.splice(index, 1);
    total.splice(index, 1);

    construir_carrito();
}
