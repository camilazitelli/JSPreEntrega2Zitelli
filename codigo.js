///catalogo de bebidas
const todasLasBebidas = [
    {nombre: 'Gin', precio: "2500"},
    {nombre: 'Fernet', precio: "1900"},
    {nombre: 'Aperol', precio: "1700"},
    {nombre: 'Cynar', precio: "1500"},
    {nombre: 'Gancia', precio: "900"},
]

///Menu
const Menu = ["1-Buscar bebida por nombre","2-Conocer el catalogo completo, con descuento por pago con transferencia", "3-La bebida que estoy buscando no está disponible, me gustaria encargarla", "4-Salir"]

///calcular descuento por pago en transferencia
function descuentosPrecios (){
alert("A continuacion le mostramos los precios con descuento del 10% por abonar por transferencia o en efectivo");
const descuentoTransferencia = todasLasBebidas.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio - 1.10
    }
})
alert(JSON.stringify(descuentoTransferencia));}


//// buscar la bebida
function buscarBebidaPorNombre (){
    let busqueda = prompt("Ingrese el nombre de la bebida que está buscando")
            let resultado = todasLasBebidas.find(
            (el) => el.nombre.toLowerCase() == busqueda.toLowerCase()
            )
                if(resultado == undefined){
                alert(JSON.stringify(`${busqueda} no se encuentra en nuestro stock`))
                }else{
alert(JSON.stringify(resultado))
}
}

///encargar 
function realizarEncargue (){
    const nombreComprador = []
    const nombreBebidaPedida = []
    const numeroDeContacto = []
    }

///resultado del encargue    
function resumenEncargue (){
    const nombreBebidaPedida = prompt("Ingrese el nombre de la bebida");
    const nombreComprador = prompt("Ingrese su nombre");
    const numeroDeContacto = prompt("Ingrese su numero de contacto");
    alert("Gracias por su pedido " + nombreComprador + "." + " Cuando tengamos existencias de " + nombreBebidaPedida + " nos comunicaremos al " + numeroDeContacto)}


let entrada = prompt("Ingrese su edad");
if (entrada < "18"){
    alert("Lo sentimos, no puede continuar");
}else{ (entrada >= "18");{
    alert("Bienvenido a la tienda de Corchos & Barriles");
    Menu.forEach((item)=> {
        alert(item)
    })
    let opciones = prompt("Ingrese una opcion del menu");
    while(opciones != "ESC"){
    switch (opciones) {
        case "1":
            buscarBebidaPorNombre();
            break;        
        case "2":
            descuentosPrecios();
            break;
        case "3":
            realizarEncargue();
            resumenEncargue();
            break;
        case "4":
            alert("Gracias por utilizar nuestra pagina")
            break;    
        default:
            alert("Ingrese una opcion válida")    
                }
            opciones = prompt("Ingrese una opcion del menu");
            }
        }
    }



