let btnCargar = document.querySelector(".formulario__btncargar");
let producto = document.querySelector(".formulario__producto");
let precio = document.querySelector(".formulario__precio");
let cantidad = document.querySelector(".formulario__cantidad");
let total = document.querySelector(".total")
let valoresTotales = [];
let contenedorLista = document.querySelector(".container-lista")
let lista = document.createElement("ul")

function crearLista(){
    lista.classList.add("lista");
    contenedorLista.appendChild(lista);
    return lista;
}

crearLista()

function crearItemLista(){
    let itemLista = document.createElement("li");
    itemLista.classList.add("lista__item");
    lista.appendChild(itemLista);
    itemLista.textContent = (valorProducto())
    return itemLista;
}

function valorProducto(){
    let valor = 0;
    valor = precio.value * cantidad.value;
    valoresTotales.push(valor);
    return (`${producto.value} cant. x${cantidad.value} total:$${valor}`);
}

function sumatoriaTotal(){
    let sum = 0;
    for(let i=0; i<valoresTotales.length; i++){
        sum = sum + valoresTotales[i];
    }
    return sum;
}

btnCargar.addEventListener("click", function(event){
    event.preventDefault();
    crearItemLista()
    total.textContent = `total: $${sumatoriaTotal()}`
    producto.value = "";
    precio.value = "";
    cantidad.value = "";
    

});

