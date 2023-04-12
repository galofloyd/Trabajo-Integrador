
const arrayCarrito = []
//esto es una manera de hacerlo, pero pega en el doom
// const containerProducts = document.querySelector("#containerProducts")

// productosLibreria.forEach(function(elemento){
// console.log(elemento.nombre);
//     containerProducts.innerHTML += `
//     <div class="producto">
//     <img src="${elemento.imagen}" alt="Producto">
//     <h3>${elemento.nombre}</h3>
//     <p>${elemento.descripcion}</p>
//     <p>${elemento.precio}</p>
//     <a href="#">Ver mas</a>
//     <button class= "btn" >Añadir al Carrito</button>
// </div>
//     `
// })
const containerProducts = document.querySelector("#containerProducts")


function htmlCards(arrayProductos){
    let fragment = document.createDocumentFragment()

arrayProductos.forEach(function(elemento){
console.log(elemento.nombre);
let divProduct = document.createElement("div")
divProduct.classList.add("producto")
let boton = document.createElement("Button")
boton.classList.add("btn")
boton.id = "producto-${elemento.id}"
boton.textContent = "Añadir al Carrito"

divProduct.innerHTML += `

         <img src="${elemento.imagen}" alt="Producto">
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

        let busqueda = productosLibreria.find((elemento) => {return elemento.id == id})
        console.log(busqueda);
        arrayCarrito.push(busqueda)
        console.log(arrayCarrito);

    })
}
// htmlCards(productosLibreria)
// for (let index = 0; index < productosInformaticos.length; index++) {
//     if(productosLibreria[i].destacado ==true )
//     htmlCards()
// }
let productosDestacados = productosLibreria.filter((elemento) => elemento.destacado ===true)
htmlCards(productosDestacados)
