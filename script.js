

const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// Check is Playing 
let isPlaying = false
// Play
function playSong() {
    isPlaying = true
    music.play();
    
}

// Pause
function pauseSong() {
    isPlaying = false
    playBtn.removeAttribute()
    music.pause();
}

// play or pause event listener

playBtn.addEventListener('click', () => (
    isPlaying ? pauseSong() : playSong()
));