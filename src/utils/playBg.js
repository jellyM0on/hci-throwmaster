const audio = new Audio("music/bg-sub.mp3");

function playBg() {
    audio.loop = true
    audio.currentTime = 0;
    audio.play();
    audio.volume = 0.20
};


function stopBg(){
    audio.pause();
    audio.currentTime = 0;
}

export { playBg, stopBg }