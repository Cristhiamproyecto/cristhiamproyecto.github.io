"use strict";
var forma = document.getElementById("forma");
var salida = document.getElementById("salidaBoleta");
var salida1 = document.getElementById("salidaNom");
var salida2 = document.getElementById("salidaGru");
var salida3 = document.getElementById("salidaMat");
var salida4 = document.getElementById("salidaFec");


forma.addEventListener("submit", procesa, false);
function procesa (){
    var nombre = forma ["Boleta"].value;
    salida.textContent = nombre;
    var nombre1 = forma ["nom"].value;
    salida1.textContent = nombre1;
    var nombre2 = forma ["gru"].value;
    salida2.textContent = nombre2;
    var nombre3 = forma ["mat"].value;
    salida3.textContent = nombre3;   
    var nombre4 = forma ["fec"].value;
    salida4.textContent = nombre4;   
}



