"use strict";
async function datenschickenhtml() {
    let data = new FormData(document.forms[0]);
    console.log("Daten:" + data.get("name"));
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/SendInHtml";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.text();
    let antwortparagraph = document.createElement("div");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
async function datenschickenjson() {
    let data = new FormData(document.forms[0]);
    console.log("Daten:" + data.get("name"));
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/sendInJsonString";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.json();
    let antwortparagraph = document.createElement("div");
    antwortparagraph.innerText = rückgabe.email + "  |  " + rückgabe.username + "  |  " + rückgabe.pw + "  |  " + rückgabe.pwbestätigt + "  |  " + rückgabe.biographie;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
let btnhtml = document.getElementById("btnhtml");
btnhtml.addEventListener("click", datenschickenhtml);
let btnJSON = document.getElementById("btnJSON");
btnJSON.addEventListener("click", datenschickenjson);
//# sourceMappingURL=aufgabe3.2.js.map