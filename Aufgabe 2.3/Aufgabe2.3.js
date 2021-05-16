"use strict";
function getRandomZahl() {
    let rdmzahl = (Math.random() * (600));
    return rdmzahl;
}
function getRandomZahl2() {
    let rdmzahl = (Math.random() * (100));
    return rdmzahl;
}
function drawdivrect() {
    let _DivRect = { länge: getRandomZahl2(), breite: getRandomZahl2(), farbe: "rgb(" + getRandomZahl2() + ", " + getRandomZahl2() + ", " + getRandomZahl2() + ")", margin: getRandomZahl2() };
    let newdiv = document.createElement("div");
    newdiv.className = "DivRect";
    newdiv.style.width = _DivRect.breite.toString() + "px";
    newdiv.style.height = _DivRect.länge.toString() + "px";
    newdiv.style.background = _DivRect.farbe;
    newdiv.style.margin = _DivRect.margin.toString() + "px";
    document.body.appendChild(newdiv);
}
function removedivrect() {
    document.querySelectorAll(".DivRect").forEach(el => el.remove());
}
let button1 = document.createElement("div");
button1.className = "Button1";
button1.style.width = "200px";
button1.style.height = "30px";
button1.style.background = "grey";
button1.style.marginLeft = "200px";
document.body.appendChild(button1);
button1.innerHTML = "Füge ein neues Rechteck hinzu";
button1.addEventListener("click", drawdivrect);
let button2 = document.createElement("div");
button2.className = "Button1";
button2.style.width = "200px";
button2.style.height = "30px";
button2.style.background = "grey";
button2.style.marginTop = "20px";
button2.style.marginLeft = "200px";
document.body.appendChild(button2);
button2.innerHTML = "Lösche alle Rechtecke";
button2.addEventListener("click", removedivrect);
//Verbesserung1: Id in Class umgeändert!
//# sourceMappingURL=Aufgabe2.3.js.map