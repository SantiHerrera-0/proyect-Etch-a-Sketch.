let contenedor = document.querySelector(".contenedor");
let elemento=[];

for(let i=0; i<256; i++){
    let nombreDeClase = i;
    elemento = document.createElement("div");
    elemento.style.border = "solid grey";
    elemento.style.height = "50px";
    elemento.style.width = "50px";
    elemento.classList.add(nombreDeClase);
    contenedor.appendChild(elemento);
}

contenedor.addEventListener("mouseover",(evento) => {
    let claseCuadroActual = evento.target.className;
    console.log(claseCuadroActual);
    let cuadroActual = evento.target;
    if(claseCuadroActual !== "contenedor"){
        cuadroActual.style.backgroundColor="red";
    }
})
