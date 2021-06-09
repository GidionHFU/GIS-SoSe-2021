"use strict";
async function datenschickenhtml() {
    let data = new FormData(document.forms[0]);
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/SendInHtml";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.text();
    let antwortparagraph = document.createElement("p");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
async function datenschickenjson() {
    let data = new FormData(document.forms[0]);
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/sendInJsonString";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.json();
    console.log(rückgabe);
}
document.getElementById("btnhtml").addEventListener("click", datenschickenhtml);
document.getElementById("btnJSON").addEventListener("click", datenschickenjson);
//xd
//# sourceMappingURL=aufgabe3.2.js.map