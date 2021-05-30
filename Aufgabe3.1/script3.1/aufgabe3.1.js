"use strict";
//Aufgabe 3.1
let btn = document.getElementById("btn");
btn.addEventListener("click", datenschicken);
async function datenschicken() {
    let data = new FormData(document.forms[0]);
    console.log("Daten:" + data.get("name"));
    for (let entry of data) {
        console.log(entry);
        console.log("name: " + entry[0]); // entry[0] gibt den String des "name-attribute" zurück
        console.log("value: " + entry[1]); // entry [1] gibt den value FormDataEntryValue zurück. Hier unnötig
    }
    let query = new URLSearchParams(data);
    let _url = "https://gissosegidionhfu.herokuapp.com/";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort = await fetch(_url);
    let rückgabe = await antwort.text();
    let antwortparagraph = document.createElement("div");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
//# sourceMappingURL=aufgabe3.1.js.map