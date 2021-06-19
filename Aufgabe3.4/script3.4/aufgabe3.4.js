"use strict";
//Aufgabe 3.4
async function datenempfangenMongo() {
    let data = new FormData(document.forms[0]);
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/empfangen";
    _url = _url + "?" + query.toString();
    let antwort = await fetch(_url);
    let rückgabe = await antwort.json();
    let rückgabenstring = JSON.stringify(rückgabe);
    let antwortparagraph = document.createElement("p");
    antwortparagraph.innerText = rückgabenstring;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
async function datenschickenMongo() {
    let data = new FormData(document.forms[0]);
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/senden";
    _url = _url + "?" + query.toString();
    let antwort = await fetch(_url);
    let rückgabe = await antwort.text();
    console.log(rückgabe);
}
document.getElementById("btnschicken").addEventListener("click", datenschickenMongo);
document.getElementById("btnempfangen").addEventListener("click", datenempfangenMongo);
//xd
//# sourceMappingURL=aufgabe3.4.js.map