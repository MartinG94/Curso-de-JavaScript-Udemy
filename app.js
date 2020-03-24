// En JS Existe un objeto llamado Date

const diaHoy = new Date();

let valor;
//Mes: Enero = 0;
valor = diaHoy.getMonth();
//Dia
valor = diaHoy.getDate();
//Año
valor = diaHoy.getFullYear();
//Minutos
valor = diaHoy.getMinutes();
//Hora
valor = diaHoy.getHours();
//Milisegundos desde 1970
valor = diaHoy.getTime();
//Cambiar Año
valor = diaHoy.setFullYear(2050);
valor = diaHoy.getFullYear();

console.log(valor);