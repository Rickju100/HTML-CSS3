
const URL = "https://www.swapi.tech/api/species/";
console.log(URL)

function handleResult(data) {
    console.log("test1")
    let container = document.getElementById("container");
    console.log(data)

    for (const specie of data.results) {
        console.log("test2")
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = specie.name.toUpperCase();

        container.appendChild(item);
    }
}

fetch(URL)
    .then(res => res.json())
  
    .then(
        function (result) {
            handleResult(result);
        }
    );


