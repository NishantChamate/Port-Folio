document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        hidePreloader();
    }, 1000);
});

function hidePreloader() {

    document.getElementById("preloader").style.display = "none";
}