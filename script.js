function toggleMode () {
const html = document.documentElement
html.classList.toggle("luz")


const img = document.querySelector("#profile img")

if (html.classList.contains('luz')) {
    img.src = "./Imagens/m3touri.jpg"
}
else img.src = "./Imagens/m8comp.jpg"
}
document.body.style.overflow = "hidden";
document.addEventListener("wheel", function(event) {
    event.preventDefault();
  });