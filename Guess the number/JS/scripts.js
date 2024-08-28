let randomNumber = 0

function randomizer() {
    randomNumber = Math.floor(Math.random(100) * 100)
    console.log(randomNumber)
}

let counter = 0
function contador() {
    counter++;
    document.getElementById("count").innerHTML = counter;

}

/* timer function*/
let timer2;
let ele = document.getElementById("time");
let sec = 0;

function timer(){
    timer2 = setInterval(()=>{
        ele.innerHTML=sec < 10 ? "00" + sec : sec;
        sec++;
    },1000)
}


function pause(){
    clearInterval(timer2);
}

function evaluar() {
    let input_value = document.getElementById("input").value.trim(); 
    let feedbackElement = document.getElementById("feedback");

 
    if (input_value === "") {
        feedbackElement.innerHTML = "Please enter a value.";
        feedbackElement.style.color = "red";
        return; 
    }

    
    if (isNaN(input_value)) {
        feedbackElement.innerHTML = "Please enter a valid number.";
        feedbackElement.style.color = "red";
        return; 
    }

    input_value = parseInt(input_value); 

    contador(); 


    if (input_value === randomNumber) {
        console.log("prueba");
        let div1 = document.getElementById("div1");
        let div2 = document.getElementById("div2");
        let div3 = document.getElementById("div3");

        pause();

        div2.style.display = 'none';
        div1.style.display = 'flex';
        div3.style.display = 'flex';

        document.getElementById("attemps").innerHTML = counter;
        document.getElementById("random").innerHTML = randomNumber;
        /* here i want to call the counter but as stoper */ 
        document.getElementById("time2").innerHTML = timer2;
    }

   
    if (input_value < randomNumber) {
        feedbackElement.innerHTML = "Value " + input_value + " is too low, try again.";
        feedbackElement.style.color = "yellow";
    }

   
    if (input_value > randomNumber) {
        feedbackElement.innerHTML = "Value " + input_value + " is too high, try again.";
        feedbackElement.style.color = "yellow";
    }
}

function iniciando() {
    let div1 = document.getElementById("div1")
    let div2 = document.getElementById("div2")
    let div3 = document.getElementById("div3")
    let textin = document.getElementById("input")
    console.log(textin)

    randomizer()
    timer()

    
    if (div1.style.display == 'flex') {
        div1.style.display = 'none'
        div2.style.display = 'flex'
    }

    if (div3.style.display == 'flex') {
        div3.style.display = 'none'
    }

    if(textin.placeholder !== "Type the number Here!" )
    {textin.placeholder = "Type the number Here!"; }

    counter = 0
    document.getElementById("count").innerHTML = counter;
    
}

