/*function hola(){
   let nombre= prompt("ingrese su nombre")
    alert("hola " + nombre )
}
hola();

let familiar = 2600;
let individual = 1500;
let dulce = 1000;
let rustica = 2100;


let seguir; //para continuar comprando
let total = 0; //para acumular el valor si se pide mas de 1 box
do {
    let box = prompt("¿Qué box llevarás hoy?");
    if (box == "familiar") {
        total += familiar; //suma el precio al total
    }
    else if (box == "individual") {
        total += individual;
    }
    else if (box == "dulce") {
        total += dulce;
    }
    else if (box == "rustica") {
        total += rustica;
    }
    seguir = prompt("genial, el total es " + total + "  ,¿Deseas agregar otro box?");
} while (seguir === "si");

let respuesta = prompt("genial, el total es " + total + "  ,¿con envio o retiro en tienda?");

if (respuesta == "envio"){
    let dia= prompt ("seleccione el dia para decirle el horario")
    switch (dia){
        case "lunes": alert("el horario de entrega será a las 19hs, muchas gracias")
        break;
        case "martes": alert("el horario de entrega será a las 17hs, muchas gracias")
        break;
        case "miercoles": alert("el horario de entrega será a las 10hs, muchas gracias")
        break;
        case "jueves": alert("el horario de entrega será a las 14hs, muchas gracias")
        break;
        case "viernes": alert("el horario de entrega será a las 9hs, muchas gracias")
        break;
        default: alert("no realizamos entregas ese dia")
        break;
    }
    }
    else if (respuesta == "retiro"){

    alert("muchas gracias por su compra, te esperamos de lunes a viernes de 9 a 20hs en correa 4318, Saavedra, CABA")
    

}*/

//CARRITO

let boxBruto=[
    {id:1, box:'familiar', precio:2600},
    {id:2, box:'Individual', precio:1000},
    {id:3, box:'dulce', precio:1500},
    {id:4, box:'rustica', precio:2100}

]
let carritoDeCompras=[];

agregarCarrito()

function agregarCarrito(){

    let nombreBox=prompt('Ingrese el nombre del box')

    let agregarBox= boxBruto.find((el) => el.box == nombreBox );
    carritoDeCompras.push(agregarBox)
    alert(carritoDeCompras)
    actualizarCarrito()
}

function actualizarCarrito(){
    alert('cajas agregadas ' + carritoDeCompras.length)
    let suma= carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    alert('la suma total de su carrito es ' + suma)

}
















