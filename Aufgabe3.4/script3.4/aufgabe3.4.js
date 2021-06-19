"use strict";
//Aufgabe 3.2
async function datenschickenMongo() {
    let data = new FormData(document.forms[0]);
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/SendMongo";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.text();
    let antwortparagraph = document.createElement("p");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
    console.log(rückgabe + "wurde verschickt");
}
async function datenempfangenMongo() {
    let data = new FormData(document.forms[0]);
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/GetMongo";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.text();
    let antwortparagraph = document.createElement("p");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
document.getElementById("btnschicken").addEventListener("click", datenschickenMongo);
document.getElementById("btnempfangen").addEventListener("click", datenempfangenMongo);
//xd
//# sourceMappingURL=aufgabe3.4.js.map