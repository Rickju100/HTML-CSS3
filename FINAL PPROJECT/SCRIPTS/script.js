document.addEventListener("DOMContentLoaded", function() { /* in the research i did, this will help the code to lade after the dom has loaded*/
    const apiURL = "https://fakestoreapi.com/products";
    console.log(apiURL)

    function product(Array){
        let container = document.getElementById("Productos");
        console.log(container)
        for (const producto of Array.result){
            let item = document.createElement("div");
            item.classList.add("item");
            item.innerHTML = producto.name.toUpperCase();
            container.appendChild(item);
        }
    }

    fetch(apiURL)
        .then((promise) => promise.json())
        .then(function (result) {
            product(result);
        })
    
});

