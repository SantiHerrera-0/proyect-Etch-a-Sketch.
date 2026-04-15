let contenedor = document.querySelector(".contenedor");
let boton = document.querySelector(".boton")
let cantidadActual = 0;


function crearGrilla(cantidad=50){
/*Formula para el lado de un cuadro.*/
    let dimensionCuadro = `${Math.sqrt((960**2)/cantidad**2)-6}px`;
    for(let i=0; i<cantidad**2; i++){
        let nombreDeClase = i;
        let elemento = document.createElement("div");
        elemento.style.border = "solid grey";
        elemento.style.height = dimensionCuadro;
        elemento.style.width =  dimensionCuadro;
        elemento.classList.add(`cuadro${nombreDeClase}`);
        contenedor.appendChild(elemento);
        }
    cantidadActual = cantidad;
}


function eliminarGrilla(){
    let nodo = contenedor.childNodes;
    console.log(nodo);
    for(let i=cantidadActual**2; i>=0; i--){
        contenedor.removeChild(nodo[i]);
    }
    console.log(nodo);
}

contenedor.addEventListener("mouseover",(evento) => {
    let claseCuadroActual = evento.target.className;
    let cuadroActual = evento.target;
    if(claseCuadroActual !== "contenedor"){
        cuadroActual.style.backgroundColor="red";
    }
})

boton.addEventListener("click",()=>{
        eliminarGrilla();
        let cantidad = +prompt("Ingresar cantidad de cuadros", 1);
        crearGrilla(cantidad);
})

crearGrilla();