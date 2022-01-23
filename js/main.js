function hola(){
   let nombre= prompt("ingrese su nombre")
    alert("hola " + nombre )
}
hola();

let familiar = 2600;
let individual = 1500;
let dulce = 1000;
let rustica = 2100;


let box= prompt("¿Qué box llevarás hoy?");

if (box == "familiar") {
    var respuesta= prompt("genial, el total es " + familiar + "  ,¿con envio o retiro en tienda?")
    
}
else if (box == "individual"){
    var respuesta= prompt("genial, el total es " + individual + "  ,¿con envio o retiro en tienda?")
}
else if (box =="dulce"){
    var respuesta= prompt("genial, el total es " + dulce + "  ,¿con envio o retiro en tienda?")
}
else if (box == "rustica"){
    var respuesta= prompt("genial, el total es " + rustica + "  ,¿Con envio o retiro en tienda?")

}

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
    

}














