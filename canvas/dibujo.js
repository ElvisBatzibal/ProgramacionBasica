var txt_cantidad= document.getElementById("txt_cantidad");
var btn_dibujar= document.getElementById("btn_dibujar");
btn_dibujar.addEventListener("click",dibujarTorreEIffel);//Escuchador de eventos

var d= document.getElementById("dibujito");
var lienzo= d.getContext("2d"); //Area donde se dibujarà
var anchocanvas = d.clientWidth;

dibujarCuadrado(anchocanvas,"red");
//dibujarLinea("pink",10,300,220,10);
//dibujarLinea("yellow",300,10,10,220);
//s4();
//s5();
function dibujarTorreEIffel()
{ 
    var Cantidad= parseInt(txt_cantidad.value);
    var EspacionLineas = anchocanvas/ Cantidad;   
    if(Cantidad>0)
    {
        var lineas=Cantidad;
        var yi;
        var xf;   
        for(var l=0; l<lineas; l++)
        {
            yi= EspacionLineas * l;
            xf =EspacionLineas * (l + 1 );          
            dibujarLinea("blue",0,yi,xf,300);    
            dibujarLinea("red",300,yi, xf,0);          
        }
    }else{
        alert("Cantidad inválida!");
    }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();  //Iniciar un trazo
    lienzo.strokeStyle=color;//Atributo color de linea
    lienzo.moveTo(xinicial,yinicial); //Metodo para mover el lapiz. Cordenanda inicia en 100,100 
    lienzo.lineTo(xfinal,yfinal); //Metodo de trazar una linea. Cordenada hasta 200,200
    lienzo.stroke(); //Metodo dibujar trazo
    lienzo.closePath();//Finaliza el trazo
}

function dibujarCuadrado(longitud, color)
{
    dibujarLinea(color,0,0,longitud,0);//arriba
    dibujarLinea(color,0,longitud, longitud, longitud);//abajo
    dibujarLinea(color,longitud,longitud,longitud,0); //lado derecho
    dibujarLinea(color,0, 0, 0,longitud); //lado izquierdo
}

function s4()
{
    var color="blue";
    dibujarLinea(color,0,0,300,0);
    dibujarLinea(color,300,0,300,300);
    dibujarLinea(color,300,300,0,300);
    dibujarLinea(color,0,300,0,0)
    dibujarLinea(color,0,0,300,300);
    dibujarLinea(color,300,0,0,300);
    dibujarLinea(color,150,0,150,300);
    dibujarLinea(color,0,150,300,150);
    dibujarLinea(color,75,0,75,300);
    dibujarLinea(color, 225, 0, 225,300);
    dibujarLinea(color, 0,75,300,75)
    dibujarLinea(color, 0,225, 300,225);
    //dibujarLinea(color, 75,0,300,225);
    dibujarLinea(color, 150,0,300,150);
    dibujarLinea(color, 225,0,300,75);
    dibujarLinea(color, 0,75,225,300);
    dibujarLinea(color, 0,150,150,300);
    dibujarLinea(color, 0,225,75,300)
    dibujarLinea(color, 75,0,0,75);
    dibujarLinea(color, 150,0,0,150);
    dibujarLinea(color, 225,0,0,225);
    dibujarLinea(color, 300,75, 75,300);
    dibujarLinea(color, 300,150,150,300);
    dibujarLinea(color, 300,225,225,300 );
    dibujarLinea(color, 75,0,300,225);
   // dibujarLinea(color,)
    
}
function s5()
{
    var color="green";
    dibujarLinea(color,0, 0, 300, 0);
    dibujarLinea(color,300, 0, 300, 300);
    dibujarLinea(color,300, 300, 0, 300);
    dibujarLinea(color,0, 300, 0, 0);
    dibujarLinea(color,0, 0, 300, 300);
    dibujarLinea(color,300, 0, 0, 300);
    dibujarLinea(color,150, 0, 150, 300);
    dibujarLinea(color,0, 150, 300, 150);
    dibujarLinea(color,75, 0, 75, 300);
    dibujarLinea(color,225, 0, 225, 300);
    dibujarLinea(color,0, 75, 300, 75);
    dibujarLinea(color,0, 225, 300, 225);
    dibujarLinea(color,75, 0, 300, 225);
    dibujarLinea(color,150, 0, 300, 150);
    dibujarLinea(color,225, 0, 300, 75);
    dibujarLinea(color,0, 75, 225, 300);
    dibujarLinea(color,0, 150, 150, 300);
    dibujarLinea(color,0, 225, 75, 300);
    dibujarLinea(color,75, 0, 0, 75);
    dibujarLinea(color,150, 0, 0, 150);
    dibujarLinea(color,225, 0, 0, 225);
    dibujarLinea(color,300, 75, 75, 300);
    dibujarLinea(color,300, 150, 150, 300);
    dibujarLinea(color,300, 225, 225, 300);
    dibujarLinea(color,37.5, 0, 37.5, 300);
    dibujarLinea(color,112.5, 0, 112.5, 300);
    dibujarLinea(color,187.5, 0, 187.5, 300);
    dibujarLinea(color,262.5, 0, 262.5, 300);
    dibujarLinea(color,0,37.5, 300, 37.5);
    dibujarLinea(color,0, 112.5, 300, 112.5);
    dibujarLinea(color,0, 187.5, 300, 187.5);
    dibujarLinea(color,0, 262.5, 300, 262.5);
}


