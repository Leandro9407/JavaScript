function orden_menu(){
    const orden_final=document.getElementById("resultado_menu");
    let seleccion=document.getElementById("menu").value;

    if (seleccion=="ajiaco"){
        orden_final.innerHTML = alert("Orden enviada: Ajiaco");
    } else if (seleccion=="bandeja_paisa"){
        orden_final.innerHTML = alert("Orden enviada: Bandeja paisa");
    } else if (seleccion=="tamal"){
        orden_final.innerHTML = alert("Orden enviada: Tamal");
    } else if (seleccion=="corrientazo"){
        orden_final.innerHTML = alert("Orden enviada: Corrientazo");
    } else if (seleccion=="sancocho_trifasio"){
        orden_final.innerHTML = alert("Orden enviada: Sancocho trifasico");
    } 
    
}