onload = () => {
  document.body.classList.remove("container");
};

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const volumeControl = document.getElementById("volumeControl");

bgMusic.volume = 0.5;

let musicStarted = false;

// Start music after the user's first click
document.addEventListener("click", () => {
    if (!musicStarted) {
        bgMusic.play().then(() => {
            musicStarted = true;
            musicToggle.textContent = "🔊";
        }).catch(() => {});
    }
}, { once: true });

// Music on/off button
musicToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇";
    }
});

// Volume slider
volumeControl.addEventListener("input", () => {
    bgMusic.volume = volumeControl.value;
});
const floatingPictures = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg"
];

let pictureIndex = 0;

function createFloatingPicture() {
    const img = document.createElement("img");

    img.src = floatingPictures[pictureIndex];

    pictureIndex++;

    if (pictureIndex >= floatingPictures.length) {
        pictureIndex = 0;
    }

    img.classList.add("floating-picture");

    img.style.left = Math.random() * 80 + 5 + "vw";

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 8000);
}

setInterval(createFloatingPicture, 2700);