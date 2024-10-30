
let producto = [];
let cantidad = [];

function agregarProducto(){
    
    const mostrando = document.getElementById("mostrando_producto");
    let agregando_p = document.getElementById("productoAgregado").value;
    let agregando_c = parseInt (document.getElementById("cantidadAgregado").value);


    producto.push(agregando_p);
    cantidad.push(agregando_c);        
        
   
    console.log(producto);
    console.log(cantidad);
   
    let añadir_inventario = "";
    producto.forEach(function(producto, indice){
    añadir_inventario += '<li class="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">' + producto;
    añadir_inventario += '<span class="badge text-bg-primary rounded-pill">' + cantidad[indice] + '</span></li>';
    });
    mostrando.innerHTML = añadir_inventario;

    for (let i=0; i<producto.length; i++){
        if (agregando_p==producto[i]){
            cantidad[i]+=agregando_c;    

            
        }
    };    
    
    document.getElementById("productoAgregado").value = "";
    document.getElementById("cantidadAgregado").value = "";
}



function modificarProducto(){

    const actualizando = document.getElementById("mostrando_producto");
    let modificar_p = document.getElementById("productoComparar").value;
    let modificar_c = parseInt (document.getElementById("cantidadModificado").value);
    let producto_actualizado = document.getElementById("productoModificado").value;

    for (let i=0; i<producto.length; i++){
         if (modificar_p==producto[i]){
             producto[i] = producto_actualizado;
             cantidad[i] = modificar_c;
        }     
            
    }

    let añadir_inventario = "";
    producto.forEach(function(producto, indice){
    añadir_inventario += '<li class="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">' + producto;
    añadir_inventario += '<span class="badge text-bg-primary rounded-pill">' + cantidad[indice] + '</span></li>';
    });

    actualizando.innerHTML = añadir_inventario;

    document.getElementById("productoComparar").value = "";
    document.getElementById("cantidadModificado").value = ""; 
    document.getElementById("productoModificado").value = "";

}