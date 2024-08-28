window.addEventListener("keydown", handleKeydown);
window.addEventListener("click", handleOnClick);

function handleKeydown(eventDetails) {
  const key = eventDetails.key.toLowerCase(); 
  const audiofile = document.getElementById(eventDetails.key);
  audiofile.currentTime = 0;
  audiofile.play();

  

  let button = document.getElementById(`b${key}`);
  if (button) {
    button.style.animationIterationCount = "1";
    button.style.animationName = "sizer"; 
    button.style.animationDuration = "1s";

   
    button.addEventListener('animationend', () => {
      button.style.animationName = "";
    });
  }
} 



function handleOnClick(eventDetails) {
  let element = document.getElementById(eventDetails.target.id).value;
  const audiofile = document.getElementById(element);
  audiofile.currentTime = 0;
  audiofile.play();
}
