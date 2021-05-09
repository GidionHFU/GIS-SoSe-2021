"use strict";
//Aufgabe 1 a)
function min(...arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(min(5, 8, 234, 1));
//b
function iseven(_n) {
    let gerade = true;
    if (_n < 0) {
        return false;
    }
    do {
        if (_n == 0 || _n == 1) {
            if (_n == 0) {
                return gerade;
            }
            else {
                gerade = false;
                return gerade;
            }
        }
        else
            _n = _n - 2;
    } while (_n >= 0);
    return null;
}
console.log(iseven(50));
console.log(iseven(75));
function isevenrekursiv(_n) {
    let gerade = true;
    if (_n < 0) {
        return false;
    }
    if (_n == 0 || _n == 1) {
        if (_n == 0) {
            return gerade;
        }
        else {
            gerade = false;
            return gerade;
        }
    }
    else
        return isevenrekursiv(_n - 2);
}
console.log(isevenrekursiv(8));
console.log(isevenrekursiv(7));
function Studenterstellen() {
    let _LeererStudent = { vorname: "leer", nachname: "leer", alter: null, matrikelnummer: null, studiengang: "leer" };
    return _LeererStudent;
}
let _Student1 = { vorname: "Murat", nachname: "Surat", alter: 23, matrikelnummer: 123145, studiengang: "OMB" };
let _Student2 = { vorname: "Simon", nachname: "Müller", alter: 20, matrikelnummer: 121231, studiengang: "MIB" };
let _Student3 = { vorname: "Lukas", nachname: "Meier", alter: 19, matrikelnummer: 129786, studiengang: "MKB" };
let studentenarray = [_Student1, _Student2, _Student3];
studentenarray.push(Studenterstellen());
console.log(_Student1.alter, _Student2.vorname, _Student3.studiengang, _Student1.vorname);
function showInfo(_nachname) {
    for (let i = 0; i < studentenarray.length; i++) {
        if (_nachname == studentenarray[i].nachname) {
            console.log(studentenarray[i].vorname);
            console.log(studentenarray[i].nachname);
            console.log(studentenarray[i].alter);
            console.log(studentenarray[i].matrikelnummer);
            console.log(studentenarray[i].studiengang);
        }
    }
}
class Student1 {
    constructor(_vorname, _nachname, _alter, _matrikelnummer, _studiengang) {
        this.vorname = _vorname;
        this.nachname = _nachname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
        this.studiengang = _studiengang;
    }
    showInfoclass(_nachname) {
        for (let i = 0; i < studentenarray.length; i++) {
            if (_nachname == studentenarray[i].nachname) {
                console.log(studentenarray[i].vorname);
                console.log(studentenarray[i].nachname);
                console.log(studentenarray[i].alter);
                console.log(studentenarray[i].matrikelnummer);
                console.log(studentenarray[i].studiengang);
            }
        }
    }
    studentanlegen(_vorname, _nachname, _alter, _matrikelnummer, _studiengang) {
        let _Student = new Student1(_vorname, _nachname, _alter, _matrikelnummer, _studiengang);
        studentenarray.push(_Student);
    }
}
//Aufgabe 2
//a)
function backwards(_arr) {
    let reverseint = [0];
    for (let i = 0; i < _arr.length; i++) {
        reverseint[i] = _arr[(_arr.length - 1) - i];
    }
    return reverseint;
}
let nummerarray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(backwards(nummerarray));
//b
function join(_arr, _arr2) {
    let beidearrays = [_arr.length + _arr2.length];
    for (let i = 0; i < _arr.length; i++) {
        beidearrays[i] = _arr[i];
    }
    for (let i = 0; i < _arr2.length; i++) {
        beidearrays[i + _arr.length] = _arr2[i]; // Die länge des ersten Arrays muss auf den Index addiert werden um die Position des Elements im zusammengesetzten Array zu bestimmen.
    }
    return beidearrays;
}
//1          //4
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
//c
function split(_index1, _index2, _arr) {
    let _rückgabearr = [_index2 - _index1];
    if (_index1 < _index2) {
        for (let i = 0; i <= _index2 - _index1; i++) {
            _rückgabearr[i] = _arr[i + _index1];
        }
    }
    else {
        for (let i = 0; i <= _index1 - _index2; i++) {
            _rückgabearr[i] = _arr[i + _index2];
        }
    }
    return _rückgabearr;
}
let arr2 = [5, 42, 17, 2018, -10, 60, -10010];
console.log(split(1, 4, arr2));
// Aufgabe 3
//a)
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "destination-over";
//Wolke
ctx.beginPath();
ctx.arc(130, 60, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#E8E8E8";
ctx.fill();
ctx.beginPath();
ctx.arc(80, 100, 45, 0, 2 * Math.PI);
ctx.fillStyle = "#E8E8E8";
ctx.fill();
ctx.beginPath();
ctx.arc(180, 100, 45, 0, 2 * Math.PI);
ctx.fillStyle = "#E8E8E8";
ctx.fill();
ctx.fillStyle = "#E8E8E8";
ctx.fillRect(80, 101, 100, 40);
//Laub
ctx.beginPath();
ctx.arc(330, 120, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#317f43";
ctx.fill();
ctx.beginPath();
ctx.arc(400, 120, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#317f43";
ctx.fill();
ctx.beginPath();
ctx.arc(365, 70, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#317f43";
ctx.fill();
//baumstamm
ctx.fillStyle = "#654321";
ctx.fillRect(340, 345, 60, -200);
// Set line width
ctx.lineWidth = 10;
// Door
ctx.fillStyle = "black";
ctx.fillRect(130, 290, 40, 60);
// Wall
ctx.fillStyle = "orange";
ctx.fillRect(75, 240, 150, 110);
// Roof
ctx.beginPath();
ctx.moveTo(50, 240);
ctx.lineTo(150, 140);
ctx.lineTo(250, 240);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
//background
ctx.strokeRect(1, 1, 455, 400);
ctx.fillStyle = "rgb(0,191,255)";
ctx.fillRect(1, 1, 454, 110);
ctx.fillStyle = "green";
ctx.fillRect(1, 111, 454, 290);
function getRandomZahl1() {
    let rdmzahl = (Math.random() * (600));
    return rdmzahl;
}
function getRandomZahl21() {
    let rdmzahl = (Math.random() * (100));
    return rdmzahl;
}
function createRect() {
    let _RdmRechteck = { länge: getRandomZahl2(), breite: getRandomZahl2(), x: getRandomZahl(), y: getRandomZahl() };
    return _RdmRechteck;
}
function drawRect(_Rechteck) {
    let canvas = document.getElementById("canvas2");
    let ctx2 = canvas.getContext("2d");
    ctx2.fillRect(_Rechteck.x + 200, _Rechteck.y + 200, _Rechteck.breite, _Rechteck.länge);
}
drawRect(createRect());
function arrayzeichnen() {
    let counter = getRandomZahl2();
    let rechteckarray = [];
    for (let i = 0; i < counter; i++) {
        rechteckarray.push(createRect());
        drawRect(rechteckarray[i]);
    }
}
arrayzeichnen();
//# sourceMappingURL=Aufgabe2.2.js.map