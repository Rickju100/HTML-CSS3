window.addEventListener("keydown", handleKeydown);
window.addEventListener("click", handleOnClick);
const letras = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

function handleKeydown(eventDetails) {
  const key = eventDetails.key.toLowerCase(); 
  if (letras.includes(key)) {
    playAndSizing(key);
  }

} 

function handleOnClick(eventDetails) {
  let element = document.getElementById(eventDetails.target.id);
  if (element !== null) {
    let key = element.id.slice(1);
    playAndSizing(key);
  }
}


function playAndSizing(key) {
  const audiofile = document.getElementById(key);
  audiofile.currentTime = 0;
  audiofile.play();
    let button = document.getElementById(`b${key}`);
    if (button) {
      button.style.animationIterationCount = "1";
      button.style.animationName = "sizer"; 
      button.style.animationDuration = "0.20s";
      button.style.animationPlayState = "running";

      button.addEventListener('animationend', () => {
        button.style.animationName = "";
      });
    }
}
