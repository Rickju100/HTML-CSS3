

const apiURL = "https://fakestoreapi.com/products/category/jewelery";
console.log(apiURL)

function product(Array){
    let container = document.getElementById("Productos");
    console.log(Array);
    cont = 1
    obj = "jewelery"
    for (const producto of Array){
        let item = document.createElement("div");
        item.classList.add("item");
        item.id= obj + cont;
        item.innerHTML = producto.title.toUpperCase();
        container.appendChild(item);
        
        let picture = document.createElement("img");
        picture.classList.add("picture");
        picture.src= "IMAGES/product.png";
        item.appendChild(picture);
        
        cont++;
    }
}

fetch(apiURL)
    .then((promise) => promise.json())
    .then(function (result) {
        product(result);
    })
