'use strict';


const photosButton = document.getElementById("photos");
const musicButton = document.getElementById("music");
const artButton = document.getElementById("art");

// Add click event listeners to the buttons
photosButton.addEventListener("click", function() {
    // Redirect to the photos page (replace "photos.html" with the actual URL)
    window.location.href = "photos.html";
});

musicButton.addEventListener("click", function() {
    // Redirect to the music page (replace "music.html" with the actual URL)
    window.location.href = "music.html";
});

artButton.addEventListener("click", function() {
    // Redirect to the art page (replace "art.html" with the actual URL)
    window.location.href = "art.html";
});