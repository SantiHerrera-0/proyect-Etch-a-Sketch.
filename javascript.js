let contenedor = document.querySelector(".contenedor");
let boton = document.querySelector(".boton")
let cantidadActual = 0;
/*Falta implementar limite de 100 cuadros.*/

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
    for(let i=(cantidadActual**2)-1; i>=0; i--){
        contenedor.removeChild(nodo[i]);
    }
}

contenedor.addEventListener("mouseover",(evento) => {
    let claseCuadroActual = evento.target.className;
    let cuadroActual = evento.target;
    if(claseCuadroActual !== "contenedor"){
        cuadroActual.style.backgroundColor="red";
    }
})

boton.addEventListener("click",()=>{
        console.log(contenedor.childNodes);
        eliminarGrilla();
        console.log(contenedor.childNodes);
        let cantidad = +prompt("Ingresar cantidad de cuadros", 1);
        crearGrilla(cantidad);
        console.log(contenedor.childNodes)
})

crearGrilla();