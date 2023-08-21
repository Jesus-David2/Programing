const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/CORONE.mp3',
        displayName: 'CORONE',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/CHIMBITA.mp3',
        displayName: 'CHIMBITA',
        cover: 'assets/Portada.jpg',
        artist: 'Feid, Sky Rompiendo',
    },
    {
        path: 'assets/TENGO FE.mp3',
        displayName: 'TENGO FE',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/COMO CUANDO.mp3',
        displayName: 'COMO CUANDO',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/JORDAN IV.mp3',
        displayName: 'JORDAN IV',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/FUMETEO.mp3',
        displayName: 'FUMETEO',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/PURRITO APA.mp3',
        displayName: 'PURRITO APA',
        cover: 'assets/Portada.jpg',
        artist: 'Feid, ICON',
    },
    {
        path: 'assets/XXXX.mp3',
        displayName: 'XXXX',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/FERXXO VI.mp3',
        displayName: 'FERXXO VI',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/HULU.mp3',
        displayName: 'HULU',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/HECTOL.mp3',
        displayName: 'HECTOL',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/EL PADRINO.mp3',
        displayName: 'EL PADRINO',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/TE MATA.mp3',
        displayName: 'TE MATA',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/14 De Febrero.mp3',
        displayName: '14 De Febrero',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/SI TÚ SUPIERAS.mp3',
        displayName: 'SI TÚ SUPIERAS',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/VACAXIONES.mp3',
        displayName: 'VACAXIONES',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/FRIKI.mp3',
        displayName: 'FRIKI',
        cover: 'assets/Portada.jpg',
        artist: 'Feid, KAROL G',
    },
    {
        path: 'assets/Monastery.mp3',
        displayName: 'Monastery',
        cover: 'assets/Portada.jpg',
        artist: 'Ryan Castro, Feid',
    },
    {
        path: 'assets/COMMENT.mp3',
        displayName: 'COMMENT',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/8 DIAX.mp3',
        displayName: '8 DIAX',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/RUDEBOYZ.mp3',
        displayName: 'RUDEBOYZ',
        cover: 'assets/Portada.jpg',
        artist: 'Feid, The Rudeboyz',
    },
    {
        path: 'assets/AMOR DE MI VIDA.mp3',
        displayName: 'AMOR DE MI VIDA',
        cover: 'assets/Portada.jpg',
        artist: 'Feid',
    },
    {
        path: 'assets/FUMETEO - Remix.mp3',
        displayName: 'FUMETEO - Remix',
        cover: 'assets/Portada.jpg',
        artist: 'Feid, Mora, Eladio Carrion',
    },
    {
        path: 'assets/MIONCA AL BLOQUE.mp3',
        displayName: 'MIONCA AL BLOQUE',
        cover: 'assets/Portada.jpg',
        artist: 'Feid, Sael',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);