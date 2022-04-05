let botonOn = document.querySelector(".on");
let botonOff =document.querySelector(".off");
let body = document.querySelector("body");
let productoInput = document.querySelector(".formulario__producto");
let precioInput = document.querySelector(".formulario__precio");
let cantidadInput = document.querySelector(".formulario__cantidad");
let containerLista = document.querySelector(".container-lista");
let containerTotal = document.querySelector(".container-total");
let spanTotal = document.querySelector(".total");

botonOn.addEventListener("click", function(event){
    event.preventDefault();

    body.classList.add("oscuro");  
    productoInput.classList.add("oscuro-input");
    precioInput.classList.add("oscuro-input");
    cantidadInput.classList.add("oscuro-input");
    containerLista.classList.add("oscuro-input");
    containerTotal.classList.add("oscuro-input");
    spanTotal.classList.add("oscuro-input");
    
});

botonOff.addEventListener("click", function(event){
    event.preventDefault();

    body.classList.remove("oscuro");
    producto.classList.remove("oscuro-input") 
    productoInput.classList.remove("oscuro-input");
    precioInput.classList.remove("oscuro-input");
    cantidadInput.classList.remove("oscuro-input");
    containerLista.classList.remove("oscuro-input");
    containerTotal.classList.remove("oscuro-input");
    spanTotal.classList.remove("oscuro-input"); 
    
});