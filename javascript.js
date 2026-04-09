let contenido = document.querySelector(".contenedor");

let elemento = [];

for(let i=0; i<256; i++){
    elemento[i] = document.createElement("div");
    elemento[i].style.border = "solid grey";
    elemento[i].style.height = "50px";
    elemento[i].style.width = "50px";
    contenido.appendChild(elemento[i]);
}
