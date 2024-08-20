
window.addEventListener("keydown", handleKeydown);
window.addEventListener("click", handleOnClick);


function handleKeydown(eventDetails) {
    const audiofile = document.getElementById(eventDetails.key);
    audiofile.currentTime = 0;
    audiofile.play();
}

function handleOnClick(eventDetails) {
    let element = document.getElementById(eventDetails.target.id).value;
    const audiofile = document.getElementById(element);
    audiofile.currentTime = 0;
    audiofile.play();
} 

