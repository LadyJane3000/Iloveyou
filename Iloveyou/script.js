// Optional for future animations
console.log("A website made with love — just for her");

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.textContent = "Play Music";
    } else {
        music.play().then(() => {
            musicBtn.textContent = "Pause Music";
        }).catch(err => {
            console.log("Play failed:", err);
            alert("The music couldn't start. Please try again.");
        });
    }
    isPlaying = !isPlaying;
});

// --- Slideshow Logic ---
const images = [
    "images/her1.jpg",
    "images/her2.jpg",
    "images/her3.jpg",
    "images/her4.jpg",
    "images/her5.jpg",
    "images/her6.jpg",
    "images/her7.jpg",
    "images/her8.jpg",
    "images/her9.jpg",
    "images/her10.jpg"
];

const captions = [
    "Hi baby, you are absolutely beautiful, po. Seriously, don't ever say you're ugly—I genuinely don't see it, not even a little bit. You have such a beautiful heart and soul, and you're stunning on the outside too. I love every single part of you simply because it's you, and I'll always, always choose you.",
    "Every moment with you is a memory I want to keep forever po. You're so incredibly cute and, honestly, beautiful as hell hehe mwuah... Awhh, I just really love you. I wish I could touch your face right now and kiss you :((.",
    "My heart melts for both of you, but you have all of it. Mwuah.",
    "This photo really shows how amazing you are. Roar! My baby is so pogandaaa! I love you, I love you so much!",
    "Your presence brings me peace. Even though it's just through online calls, your presence genuinely brings me so much peace and comfort. It's amazing how just seeing you can calm everything down.",
    "You're the best part of my every day.",
    "Every photo of you is my favorite one.",
    "I feel lucky to have you in my life.",
    "You’re not just beautiful — you’re everything.",
    "I’ll keep choosing you, over and over. 💖"
];

let currentIndex = 0;
const slideImage = document.getElementById("slide-image");
const slideCaption = document.getElementById("slide-caption");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImage.src = images[currentIndex];
    slideCaption.textContent = captions[currentIndex];
});


document.getElementById("ask-btn").addEventListener("click", function () {
    document.getElementById("proposal-modal").style.display = "flex";
});

// Show proposal modal
askBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Handle proposal answer
function answerProposal(answer) {
    alert("You said: " + answer + " 💕 You Have Me Already, Baby! MWUAH");

    // Hide the modal
    document.getElementById("proposal-modal").style.display = "none";

    // Show the video
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("love-video");

    videoContainer.style.display = "block";
    video.play();
}
