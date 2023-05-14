const closeBtn = document.querySelector(".close");
const leftAside = document.querySelector(".left");
const bars = document.querySelector(".burger");
closeBtn.addEventListener("click", () => {
    leftAside.classList.toggle("visually-hidden");
    bars.classList.toggle("visually-hidden");
});
bars.addEventListener("click", () => {
    leftAside.classList.toggle("visually-hidden");
    bars.classList.toggle("visually-hidden");
});
