const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const player = document.querySelector('.player');

const songs = [
    'C:/Users/HP/Downloads/Nadaaniyan(KoshalWorld.Com).mp3',
    'C:/Users/HP/Downloads/Title Track Bhool Bhulaiyaa 3 320 Kbps.mp3',
    'C:/Users/HP/Downloads/Illuminati-Sushin-Shyam-Dabzee.mp3',
    'C:/Users/HP/Downloads/Tambdi Chamdi - PagalHits.mp3',
];

let currentSongIndex = 0;

// Play the current song
function playCurrentSong() {
    audio.src = songs[currentSongIndex];
    audio.play();
}

// Update progress bar
function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

// Reset player
function resetPlayer() {
    audio.pause();
    audio.currentTime = 0;
    progressBar.style.width = '0%';
}

// Play event
playButton.addEventListener('click', () => {
    playCurrentSong();
});

// Pause event
pauseButton.addEventListener('click', () => {
    audio.pause();
});

// Next song event
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
});

// Update progress bar as the song plays
audio.addEventListener('timeupdate', updateProgressBar);

// Reset the progress bar when the song ends
audio.addEventListener('ended', () => {
    resetPlayer();
    playCurrentSong(); // Automatically play the next song
});
