// Falling hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.top = '-20px';
    heart.style.animation = 'heartFall linear forwards';
    
    document.querySelector('.falling-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Reveal letter on scroll
function revealLetter() {
    const letter = document.querySelector('.reveal-letter');
    const letterTop = letter.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (letterTop < windowHeight * 0.75) {
        letter.classList.add('active');
    }
}

window.addEventListener('scroll', revealLetter);

// Photo modal
function expandPhoto(element) {
    const modal = document.getElementById('photoModal');
    const expandedImg = document.getElementById('expandedPhoto');
    const img = element.querySelector('img');
    
    expandedImg.src = img.src;
    modal.classList.add('active');
}

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('photoModal').classList.remove('active');
});

// Custom audio player
let audio = document.getElementById('audioPlayer');
let playBtn = document.getElementById('playBtn');
let progressBar = document.querySelector('.progress-bar');
let progress = document.querySelector('.progress');
let timeDisplay = document.querySelector('.time');
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="play-icon"></i>';
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="pause-icon"></i>';
    }
    isPlaying = !isPlaying;
}

audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + '%';
    
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percentage * audio.duration;
});

// Initial page load animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.title').classList.add('animate-in');
    
    // Check if letter is in view on page load
    revealLetter();
});