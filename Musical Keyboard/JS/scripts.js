
window.addEventListener("keydown", handleKeydown);
window.addEventListener("onclick", handleOnClick);


function handleKeydown(eventDetails) {
    const audiofile = document.getElementById(eventDetails.key);
    audiofile.currentTime = 0;
    audiofile.play();
}

function handleOnClick(eventDetails) {
    const audiofile = document.getElementById(click);
    audiofile.currentTime = 0;
    audiofile.play();
} 