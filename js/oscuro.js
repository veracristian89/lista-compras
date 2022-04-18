let onOffBtn = document.querySelector(".onOff");
let body = document.querySelector("body");
let productoInput = document.querySelector(".formulario__producto");
let precioInput = document.querySelector(".formulario__precio");
let cantidadInput = document.querySelector(".formulario__cantidad");
let containerLista = document.querySelector(".container-lista");
let containerTotal = document.querySelector(".container-total");
let spanTotal = document.querySelector(".total");

console.log(onOffBtn.innerHTML)

onOffBtn.addEventListener("click", function(event){
    event.preventDefault();

    body.classList.toggle("oscuro");  
    productoInput.classList.toggle("oscuro-input");
    precioInput.classList.toggle("oscuro-input");
    cantidadInput.classList.toggle("oscuro-input");
    containerLista.classList.toggle("oscuro-input");
    containerTotal.classList.toggle("oscuro-input");
    spanTotal.classList.toggle("oscuro-input");
    if (onOffBtn.innerHTML=="on"){
        onOffBtn.innerHTML="off"
    } else if (onOffBtn.innerHTML=="off"){
        onOffBtn.innerHTML="on"
    }
    
    
});
