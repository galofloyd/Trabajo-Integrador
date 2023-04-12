const containerProducts = document.querySelector("#containerProducts")
const inputSearch = document.querySelector("#inputSearch")
function htmlCards(arrayProductos){
    let fragment = document.createDocumentFragment()
    containerProducts.innerHTML = ""

arrayProductos.forEach(function(elemento){
console.log(elemento.nombre);
let divProduct = document.createElement("div")
divProduct.classList.add("producto")
let boton = document.createElement("Button")
boton.classList.add("btn")
boton.id = "producto-${elemento.id}"
boton.textContent = "Añadir al Carrito"

divProduct.innerHTML += `

         <img src=.${elemento.imagen} alt="Producto">
         <h3>${elemento.nombre}</h3>
         <p>${elemento.descripcion}</p>
         <p>${elemento.precio}</p>
         <a href="#">Ver mas</a>
         

     `
     divProduct.append(boton)
     fragment.append(divProduct)
     addCart(boton)
})
containerProducts.append(fragment)
}
function addCart(boton){

    boton.addEventListener("click", function(evento){
        let id = evento.target.id
        console.log(id);
        id= id.slice(9)
        console.log(id);

        let busqueda = productoslibreria.find((elemento) => {return elemento.id == id})
        console.log(busqueda);
        arrayCarrito.push(busqueda)
        console.log(arrayCarrito);

    })
}
htmlCards(productosLibreria)
inputSearch.addEventListener("input", (evento) =>{
    console.log(evento.target.value);
    let productName = evento.target.value
    productName = productName.toLowerCase()
    let busqueda = productosLibreria.filter((elemento) => elemento.nombre.includes(productName))
    console.log(busqueda);
    htmlCards(busqueda)
})