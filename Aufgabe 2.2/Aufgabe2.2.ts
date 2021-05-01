//Aufgabe 1 a)
function min(...arr: number[]): number {
    let min: number = arr[0];
    for (let i: number = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(min(5, 8, 234, 1));

//b

//c
interface Student {
    vorname: string;
    nachname: string;
    alter: number;
    matrikelnummer: number;
    studiengang: string;
}
let _Student1: Student = { vorname: "Murat", nachname: "Surat", alter: 23, matrikelnummer: 123145, studiengang: "OMB" };
let _Student2: Student = { vorname: "Simon", nachname: "Müller", alter: 20, matrikelnummer: 121231, studiengang: "MIB" };
let _Student3: Student = { vorname: "Lukas", nachname: "Meier", alter: 19, matrikelnummer: 129786, studiengang: "MKB" };
let studentenarray: Student[] = [_Student1, _Student2, _Student3];
console.log(_Student1.alter, _Student2.vorname, _Student3.studiengang, _Student1.vorname);

function showInfo(_nachname: string): void {
    for (let i: number = 0; i < studentenarray.length; i++) {
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
    vorname: string;
    nachname: string;
    alter: number;
    matrikelnummer: number;
    studiengang: string;


    constructor(_vorname: string, _nachname: string, _alter: number, _matrikelnummer: number, _studiengang: string) {
        this.vorname = _vorname;
        this.nachname = _nachname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
        this.studiengang = _studiengang;
    }

    showInfoclass(_nachname: string): void {
        for (let i: number = 0; i < studentenarray.length; i++) {
            if (_nachname == studentenarray[i].nachname) {
                console.log(studentenarray[i].vorname);
                console.log(studentenarray[i].nachname);
                console.log(studentenarray[i].alter);
                console.log(studentenarray[i].matrikelnummer);
                console.log(studentenarray[i].studiengang);
            }
        }
    }
    studentanlegen(_vorname: string, _nachname: string, _alter: number, _matrikelnummer: number, _studiengang: string): void {
        let _Student: Student1 = new Student1(_vorname, _nachname, _alter, _matrikelnummer, _studiengang);
        studentenarray.push(_Student);
    }
}

//Aufgabe 2
//a)
function backwards(arr: number[] ): number[] {
    let reverseint: number[] = [0];
    for (let i: number = 0; i < arr.length; i++) {
        reverseint[i] = arr[(arr.length - 1 ) - i ];
    }
    return reverseint;
}

let nummerarray: number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]; 
console.log(backwards(nummerarray));

function join (arr: number[], arr2: number[] ): number[] {
    let beidearrays: number[] = [arr.length + arr2.length];

    for (let i: number = 0; i < arr.length; i++) {
        beidearrays[i] = arr[i];
    }

    for (let i: number = 0; i < arr2.length ; i++) {
        beidearrays[i + arr.length] = arr2[i];  // Die länge des ersten Arrays muss auf den Index addiert werden um die Position des Elements im zusammengesetzten Array zu bestimmen.
    }

    return beidearrays;
} 

let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
