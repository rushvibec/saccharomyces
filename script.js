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
        bgMusic.play().then(() => {
            musicToggle.textContent = "🔊";
        }).catch(() => {});
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇";
    }
});

// Volume slider
volumeControl.addEventListener("input", () => {
    bgMusic.volume = volumeControl.value;
});


// ==============================
// FLOATING PICTURES
// ==============================

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

    // Cycle through the pictures
    img.src = floatingPictures[pictureIndex];
    pictureIndex = (pictureIndex + 1) % floatingPictures.length;

    img.classList.add("floating-picture");

    // Add it to the page first so we can measure it
    document.body.appendChild(img);

    // Wait until the image has loaded
    img.onload = () => {
        const screenWidth = window.innerWidth;
        const imageWidth = img.offsetWidth;

        // Keep the picture inside the screen
        const sideMargin = screenWidth < 600 ? 15 : 30;

        const maxLeft = Math.max(
            sideMargin,
            screenWidth - imageWidth - sideMargin
        );

        const randomLeft =
            sideMargin + Math.random() * (maxLeft - sideMargin);

        img.style.left = randomLeft + "px";
    };

    // Remove after animation finishes
    setTimeout(() => {
        img.remove();
    }, 8000);
}


// Start floating pictures
setInterval(createFloatingPicture, 2700);