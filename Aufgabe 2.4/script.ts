/*
function jsonladen(): Allemöglichkeiten { //1a json konvertieren
    let rückgabe: Allemöglichkeiten = JSON.parse(jsonconvert);
    return rückgabe;
}
let allemöglichkeitenAnzeigen: Allemöglichkeiten = jsonladen();

function waffeldiv(_auswahl: any): HTMLDivElement {
    let divwaffel: HTMLDivElement = document.createElement("div");
    divwaffel.classList.add("Waffel");

    let pinner1: HTMLParagraphElement = document.createElement("p");
    pinner1.innerText = _auswahl.art + "  " + _auswahl.preis + "€";
    divwaffel.appendChild(pinner1);

    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = "Select";
    divwaffel.appendChild(button);

    if (document.querySelector("title").getAttribute("id") === "Page1")
        button.addEventListener("click", function (_event: Event): void {
            console.log(_auswahl);
            sessionStorage.setItem("art1", _auswahl.art);
            sessionStorage.setItem("preis1", _auswahl.preis.toString());

        });
    else if (document.querySelector("title").getAttribute("id") === "Page2")
        button.addEventListener("click", function (_event: Event): void {
            console.log(_auswahl);
            sessionStorage.setItem("art2", _auswahl.art);
            sessionStorage.setItem("preis2", _auswahl.preis.toString());

        });
    else if (document.querySelector("title").getAttribute("id") === "Page3")
        button.addEventListener("click", function (_event: Event): void {
            console.log(_auswahl);
            sessionStorage.setItem("art3", _auswahl.art);
            sessionStorage.setItem("preis3", _auswahl.preis.toString());

        });
    else if (document.querySelector("title").getAttribute("id") === "Page4")
        button.addEventListener("click", function (_event: Event): void {
            console.log(_auswahl);
            sessionStorage.setItem("art4", _auswahl.art);
            sessionStorage.setItem("preis4", _auswahl.preis.toString());

        });
    else if (document.querySelector("title").getAttribute("id") === "Page5")
        button.addEventListener("click", function (_event: Event): void {
            console.log(_auswahl);
            sessionStorage.setItem("art5", _auswahl.art);
            sessionStorage.setItem("preis5", _auswahl.preis.toString());
        });


    return divwaffel;
}

function buttonfunc(): void {
    let buttonweiter: HTMLDivElement = <HTMLDivElement>document.getElementById("Weiter");
    if (document.querySelector("title").getAttribute("id") === "Page1") {
        buttonweiter.addEventListener("click", function (_event: Event): void {
            location.href = "soßenauswahl.html";
        });
    }
    else if (document.querySelector("title").getAttribute("id") === "Page2") {
        buttonweiter.addEventListener("click", function (_event: Event): void {
            location.href = "früchteauswahl.html";
        });
    }
    else if (document.querySelector("title").getAttribute("id") === "Page3") {
        buttonweiter.addEventListener("click", function (_event: Event): void {
            location.href = "toppingauswahl.html";
        });
    }
    else if (document.querySelector("title").getAttribute("id") === "Page4") {
        buttonweiter.addEventListener("click", function (_event: Event): void {
            location.href = "eisauswahl.html";
        });
    }
    else if (document.querySelector("title").getAttribute("id") === "Page5") {
        buttonweiter.addEventListener("click", function (_event: Event): void {
            location.href = "gesammtauswahl.html";
        });
    }
}
buttonfunc();
function reset(): void {
    let neustart: HTMLDivElement = <HTMLDivElement>document.getElementById("neustart");
    if (document.querySelector("title").getAttribute("id") === "Page1") {
        neustart.addEventListener("click", function (_event: Event): void {
            location.href = "index.html";
            localStorage.clear();
        });
    }
}

reset();


function anzeigenlassen(_auswahl: Allemöglichkeiten): void {

    let auswahl: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahl");

    if (document.querySelector("title").getAttribute("id") === "Page1") {
        for (let i: number = 0; i < _auswahl.teig.length; i++) {
            let waffeldivprint: HTMLDivElement = waffeldiv(_auswahl.teig[i]);
            auswahl.appendChild(waffeldivprint);
        }
    }
    else if (document.querySelector("title").getAttribute("id") === "Page2") {
        for (let i: number = 0; i < _auswahl.soßen.length; i++) {
            let waffeldivprint: HTMLDivElement = waffeldiv(_auswahl.soßen[i]);
            auswahl.appendChild(waffeldivprint);
        }
    }
    else if (document.querySelector("title").getAttribute("id") === "Page3") {
        for (let i: number = 0; i < _auswahl.früchte.length; i++) {
            let waffeldivprint: HTMLDivElement = waffeldiv(_auswahl.früchte[i]);
            auswahl.appendChild(waffeldivprint);
        }
    }
    else if (document.querySelector("title").getAttribute("id") === "Page4") {
        for (let i: number = 0; i < _auswahl.topping.length; i++) {
            let waffeldivprint: HTMLDivElement = waffeldiv(_auswahl.topping[i]);
            auswahl.appendChild(waffeldivprint);
        }
    }
    else if (document.querySelector("title").getAttribute("id") === "Page5") {
        for (let i: number = 0; i < _auswahl.eis.length; i++) {
            let waffeldivprint: HTMLDivElement = waffeldiv(_auswahl.eis[i]);
            auswahl.appendChild(waffeldivprint);
        }
    }
}
anzeigenlassen(allemöglichkeitenAnzeigen);

let divauswahl: HTMLDivElement = <HTMLDivElement>document.getElementById("ausgewählt");
let divvorhanden: HTMLDivElement = document.createElement("div");
divvorhanden.classList.add("Waffel2");
divvorhanden.innerText = "";
if ((document.querySelector("title").getAttribute("id") === "Page2")) {
    divvorhanden.innerText = sessionStorage.getItem("art1") + " " + parseFloat(sessionStorage.getItem("preis1")) + "€";
    divauswahl.appendChild(divvorhanden);

}
if ((document.querySelector("title").getAttribute("id") === "Page3")) {
    divvorhanden.innerText = sessionStorage.getItem("art1") + " " + parseFloat(sessionStorage.getItem("preis1")) +
        "€" + "\n " + sessionStorage.getItem("art2") + " " + parseFloat(sessionStorage.getItem("preis2")) + "€";
    divauswahl.appendChild(divvorhanden);

}
if ((document.querySelector("title").getAttribute("id") === "Page4")) {
    divvorhanden.innerText = sessionStorage.getItem("art1") + " " + parseFloat(sessionStorage.getItem("preis1")) +
        "€" + "\n " + sessionStorage.getItem("art2") + " " + parseFloat(sessionStorage.getItem("preis2")) + "€" + " \n " + sessionStorage.getItem("art3") + " " +
        parseFloat(sessionStorage.getItem("preis3")) + "€";
    divauswahl.appendChild(divvorhanden);
}
if ((document.querySelector("title").getAttribute("id") === "Page5")) {
    divvorhanden.innerText = sessionStorage.getItem("art1") + " " + parseFloat(sessionStorage.getItem("preis1")) +
        "€" + "\n " + sessionStorage.getItem("art2") + " " + parseFloat(sessionStorage.getItem("preis2")) + "€" + " \n " + sessionStorage.getItem("art3") + " " +
        parseFloat(sessionStorage.getItem("preis3")) + "€" + " \n " + sessionStorage.getItem("art4") + " " +
        parseFloat(sessionStorage.getItem("preis4")) + "€";
    divauswahl.appendChild(divvorhanden);
}
if ((document.querySelector("title").getAttribute("id") === "Page6")) {
    let gesammt: number = parseFloat(sessionStorage.getItem("preis1")) + parseFloat(sessionStorage.getItem("preis2")) + parseFloat(sessionStorage.getItem("preis3")) + parseFloat(sessionStorage.getItem("preis4")) + parseFloat(sessionStorage.getItem("preis5"));
    divvorhanden.innerText = sessionStorage.getItem("art1") + " " + parseFloat(sessionStorage.getItem("preis1")) +
        "€" + "\n " + sessionStorage.getItem("art2") + " " + parseFloat(sessionStorage.getItem("preis2")) + "€" + " \n " + sessionStorage.getItem("art3") + " " +
        parseFloat(sessionStorage.getItem("preis3")) + "€" + " \n " + sessionStorage.getItem("art4") + " " +
        parseFloat(sessionStorage.getItem("preis4")) + "€" + " \n " + sessionStorage.getItem("art5") + " " +
        parseFloat(sessionStorage.getItem("preis4")) + "€" + "\n" + " _____________________" + "\n" + gesammt + "€";
    divauswahl.appendChild(divvorhanden);

}
*/