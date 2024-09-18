
const apiURL = "https://fakestoreapi.com/products";
console.log(apiURL)

function product(Array){
    let container = document.getElementById("Productos");
    console.log(Array);
    for (const producto of Array){
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = producto.title.toUpperCase();
        container.appendChild(item);
        
        let picture = document.createElement("img");
        picture.classList.add("picture");
        picture.src= "IMAGES/product.png";
        item.appendChild(picture);
        
       
    }
}

fetch(apiURL)
    .then((promise) => promise.json())
    .then(function (result) {
        product(result);
    })


