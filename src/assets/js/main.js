let bigImage = document.querySelector("#big-image");
let thumbnails = document.querySelectorAll(".thumbnail");

[...thumbnails].map(item => {
    item.addEventListener("click", (event) => {
        bigImage.src = event.currentTarget.src;
    });
})