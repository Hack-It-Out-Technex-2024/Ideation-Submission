document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll(".feature");
    features.forEach(feature => {
        feature.classList.add("loaded");
    });
});
