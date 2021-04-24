"use strict";
/* // Aufgabe 1:
function a1(): void {
    let x: string = "Alles";
    func2(x);
    func1(x);
    func3(x);
}

a1();

function func1(x: string): void {
    
    console.log(x + " klar?");
}
function func2(x: string): void {
    console.log(x + " Gute!");
}
function func3(x: string): void {
    console.log(x + " Logo!");
}

//Aufgabe1 Kommentar
//So habe ich die Aufgabe verstanden bin davon ausgegangen dass immer die zwei Wörter in einer Zeile sein müssen.
//a/b) Soweit nachvollziebar, es gab keine Überraschung







// Aufgabe 2:
debugger;
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();

//Aufgabe2 Kommentar
// Es entsteht eine Schleife welche die Zahlen rückwärts runterzählt bis i nicht mehr > 0 ist








// Aufgabe 3:
function a1(): void {
    let x: string = "Alles";
    func2();
    func1(x);
    func3(x);
}

a1();

function func1(x: string): void {
    
    console.log(x + " klar?");
}
function func2(x: string): void {
    console.log(x + " Gute!");
}
function func3(x: string): void {
    console.log(x + " Logo!");
}
// Hier lässt sich der Fehler gut herauslesen, da "An argument for 'x' was not provided." erscheint


function a2(): void {
    let i: string = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}
a2();
// Hier erkennt man den Fehler auch relativ gut, jedoch kommen mehrere verschiedene Fehlermeldungen, weshalb man diese erstmal alle durchgehen muss.
*/
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
// Meine erste Annahme war " Hallo Bla Hallo Blub Hallo". Ich habe verpennt dass mit der Func3 x einen neuen Wert bekommt.
//Auf Lokale Varibalen kann man nur in bestimmten bereichen des Programms zugreifen, auf globalen hingegen kann man von einer beliebigen Stelle im Programm zugreifen, siehe func3. So wie ich das verstanden habe sind "normale Variablen" lokal und Funktionen global, 
//da man auf die Werte der Funktion im gesammten programm zugreifen kann
//Aufgabe 5:
//a)
function multiply(Zahl1, Zahl2) {
    let x = Zahl1 * Zahl2;
    return x;
}
console.log(multiply(3, 4));
//b)
function max(Zahl1, Zahl2) {
    if (Zahl1 >= Zahl2) {
        return Zahl1;
    }
    else
        return Zahl2;
}
console.log(max(2, 7));
console.log(max(23, 7));
console.log(max(7, 7));
//c)
function EinsBisHundert() {
    let i = 0;
    let counter = 0;
    let random = 0;
    do {
        random = random + 1;
        i = i + random;
        counter = counter + 1;
    } while (counter < 100);
    if (counter = 100) {
        console.log(i);
    }
}
EinsBisHundert();
//d)
function getRandomZahl() {
    for (let i = 0; i <= 10; i++)
        console.log(Math.random() * (100));
}
getRandomZahl();
//f)
function factorial(n) {
    let counter = 1;
    let ergebnis = 1;
    if (n > 1) {
        do {
            counter = counter + 1;
            ergebnis = ergebnis * counter;
        } while (counter < n);
        return ergebnis;
    }
    else {
        return 1;
    }
}
console.log(factorial(0.5));
console.log(factorial(5));
//g)
function lapyears() {
    for (let i = 1900; i <= 2021; i++) {
        if (i % 4 == 0) {
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    console.log(i + " ist ein Schaltjahr");
                }
            }
            else
                console.log(i + " ist ein Schaltjahr");
        }
    }
}
lapyears();
//Aufgabe 6
//a)
function hashtagschleife() {
    let hashtag = "#";
    let hashtag2 = "#";
    for (let i = 0; i < 7; i++) {
        console.log(hashtag);
        hashtag = hashtag + hashtag2;
    }
}
hashtagschleife();
//b)
function EinsBisHundertFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            console.log("Fizz");
        }
        else if (i % 3 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
EinsBisHundertFizzBuzz();
//c)
function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
FizzBuzz();
function FizzBuzz2() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
FizzBuzz2();
//d)
//# sourceMappingURL=Aufgabe1.js.map