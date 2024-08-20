let randomNumber = Math.floor(Math.random(100*100))

function contador(){
    let counter = document.getElementById("#count")
    counter ++;
    counter.innerHTML="counter"
}


function iniciando(){
    let div1 = document.querySelector("#div1")
    let div2 = document.querySelector("#div2")
    if(div1.style.display === "flex"){
        div1.style.display = "none"
        if(div1.style.display === "none"){
            div2.style.display = "flex"
        }
    }

}


let p_user_number = document.getElementById("txt_number");    

let user_number = p_user_number.value;

if (user_number.length === 0) 
{


}

