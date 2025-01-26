const easyAudio = new Audio("music/bg-easy.mp3");
const compAudio = new Audio("music/bg-competitive.mp3");

function playGameBg(mode) {
    if(mode == "easy"){
        easyAudio.loop = true
        easyAudio.currentTime = 0;
        easyAudio.play();
        easyAudio.volume = 0.20
    } else {
        compAudio.loop = true
        compAudio.currentTime = 0;
        compAudio.play();
        compAudio.volume = 0.20
    }

};

function stopGameBg(){

        easyAudio.pause();
        easyAudio.currentTime = 0;

        compAudio.pause()
        compAudio.currentTime = 0

}

export { playGameBg, stopGameBg }