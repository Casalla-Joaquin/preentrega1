let datosNombre = prompt("ingrese su nombre");
let datosEdad = parseInt(prompt(`hola ${datosNombre}, ingrese su edad`)); 
let aviso = alert("la maquina contara si escribe`siga`, para que pare escriba basta`basta`");
let pregunta = prompt("escriba`siga` o `basta`");
let año = 2023;

//esta funcion toma el prompt de año y de  le datosEdad, luego le suma uno a cada y devuelve un alert

function tarea(){
    for (let i = 1; i <= 40; i++) {
        let resultado = datosEdad++;
        let añoDespues = año++;
        alert(`usted tendrá ${resultado} en el ${añoDespues}`);
        let preguntaDos = prompt("escriba`siga` o `basta`");
         if(preguntaDos == ("basta")){
            alert(`usted tendrá ${datosEdad} años, en el año ${añoDespues}`);
            break;
         }
      }
}


if (pregunta == ("siga")){
    tarea();
}else{
    alert(`usted tiene ${datosEdad} años, en el ${año}`);
}
 



