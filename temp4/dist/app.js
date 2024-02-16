const btn_close = document.querySelector(".btn-close");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu")
const toggle1 = document.querySelector(".toggle1");
const svg1 = document.querySelector(".toggle1 svg");
const toggle2 = document.querySelector(".toggle2");
const svg2 = document.querySelector(".toggle2 svg");
const lihidden1 = document.querySelector(".t1")
const lihidden2 = document.querySelector(".t2")

btn_close.addEventListener("click", () => {
    nav.style.right = ("-300px")
})
menu.addEventListener("click", () => {
    nav.style.right = ("0px")
})



toggle1.addEventListener("click", () => {
    lihidden1.classList.toggle("hidden")
    svg1.classList.toggle("svg")
})
toggle2.addEventListener("click", () => {
    lihidden2.classList.toggle("hidden")
    svg2.classList.toggle("svg")
})

