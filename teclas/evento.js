//Creacion de objeto JSON
var teclas={
    LEFT:37,
    RIGHT:39,
    DOWN:40,
    UP:38
};
console.log(teclas);
//Escuchar evento desde el objeto document
document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(event)
{
    //keyCode devuelve el codigo de una tecla presionada asociada con el valor ASCII asignado. 
    //keyCode no cambia. 
    switch(event.keyCode)
    {
        case teclas.UP:
            {
                console.log("Arriba");
                break;
            }
            case teclas.DOWN:
            {
                console.log("Abajo");
                break;
            }
            case teclas.LEFT:
            {
                console.log("Izquierda");
                break;
            }
            case teclas.RIGHT:
            {
                console.log("Derecho");
                break;
            }
            default:
            {
               console.log("Tecla Invalida");
               break;
            }
    }
}