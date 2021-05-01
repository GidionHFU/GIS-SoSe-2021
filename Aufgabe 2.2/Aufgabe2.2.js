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
let _Student1 = { vorname: "Murat", nachname: "Surat", alter: 23, matrikelnummer: 123145, studiengang: "OMB" };
let _Student2 = { vorname: "Simon", nachname: "Müller", alter: 20, matrikelnummer: 121231, studiengang: "MIB" };
let _Student3 = { vorname: "Lukas", nachname: "Meier", alter: 19, matrikelnummer: 129786, studiengang: "MKB" };
let studentenarray = [_Student1, _Student2, _Student3];
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
function backwards(arr) {
    let reverseint = [0];
    for (let i = 0; i < arr.length; i++) {
        reverseint[i] = arr[(arr.length - 1) - i];
    }
    return reverseint;
}
let nummerarray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(backwards(nummerarray));
function join(arr, arr2) {
    let beidearrays = [arr.length + arr2.length];
    for (let i = 0; i < arr.length; i++) {
        beidearrays[i] = arr[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        beidearrays[i + arr.length] = arr2[i]; // Die länge des ersten Arrays muss auf den Index addiert werden um die Position des Elements im zusammengesetzten Array zu bestimmen.
    }
    return beidearrays;
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
//# sourceMappingURL=Aufgabe2.2.js.map