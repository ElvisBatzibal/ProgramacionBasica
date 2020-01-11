var d= document.getElementById("dibujito");
var lienzo= d.getContext("2d"); //Area donde se dibujarà

lienzo.beginPath();  //Iniciar un trazo
lienzo.strokeStyle="red";//Atributo color de linea
lienzo.moveTo(100,100); //Metodo para mover el lapiz. Cordenanda inicia en 100,100 
lienzo.lineTo(200,200); //Metodo de trazar una linea. Cordenada hasta 200,200
lienzo.stroke(); //Metodo dibujar trazo
lienzo.closePath();//Finaliza el trazo

console.log(d);
console.log(lienzo);
