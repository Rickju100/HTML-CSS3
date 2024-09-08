
const apiURL = "https://fakestoreapi.com/products";



function product(data){
    let container = document.getElementById("Productos");

    for (const producto of data.result){
        let item = document.createElement("div");
        item.classList.add("item")
        item.innerHTML = producto.name.toUpperCase();
        container.appendChild(item);

    }
}

fetch(apiURL)
.then((promise) => promise.json())
.then(function (result) {
    handleResult(result);
});

