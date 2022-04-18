let onOffBtn = document.querySelector(".onOff");
let body = document.querySelector("body");
let productoInput = document.querySelector(".formulario__producto");
let precioInput = document.querySelector(".formulario__precio");
let cantidadInput = document.querySelector(".formulario__cantidad");
let containerLista = document.querySelector(".container-lista");
let containerTotal = document.querySelector(".container-total");
let spanTotal = document.querySelector(".total");

onOffBtn.addEventListener("click", function(event){
    event.preventDefault();

    body.classList.toggle("oscuro");  
    productoInput.classList.toggle("oscuro-input");
    precioInput.classList.toggle("oscuro-input");
    cantidadInput.classList.toggle("oscuro-input");
    containerLista.classList.toggle("oscuro-input");
    containerTotal.classList.toggle("oscuro-input");
    spanTotal.classList.toggle("oscuro-input");
    
});

// botonOff.addEventListener("click", function(event){
//     event.preventDefault();

//     body.classList.remove("oscuro");
//     producto.classList.remove("oscuro-input") 
//     productoInput.classList.remove("oscuro-input");
//     precioInput.classList.remove("oscuro-input");
//     cantidadInput.classList.remove("oscuro-input");
//     containerLista.classList.remove("oscuro-input");
//     containerTotal.classList.remove("oscuro-input");
//     spanTotal.classList.remove("oscuro-input"); 
    
// });