let bigImage = document.querySelector("#big-image");
let thumbnails = document.querySelectorAll(".thumbnail");
let menu = document.querySelector(".menu");

[...thumbnails].map(item => {
    item.addEventListener("click", (event) => {
        [...thumbnails].map(el => {
            el.classList.remove('active');
        });
        item.classList.toggle('active');
        bigImage.src = event.currentTarget.src;
    });
})

document.querySelector(".brand svg").addEventListener("click", () => {
    menu.style.display = "block";
});
document.querySelector(".menu svg").addEventListener("click", () => {
    menu.style.display = "none";
});