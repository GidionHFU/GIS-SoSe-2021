//Aufgabe 3.4



async function datenempfangenMongo(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>data);
    let _url: RequestInfo = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/empfangen";
    _url = _url + "?" + query.toString();
    let antwort: Response = await fetch(_url);
    let rückgabe: JsonObjConvert = await antwort.json();
    let rückgabenstring: string = JSON.stringify(rückgabe);
    let antwortparagraph: HTMLParagraphElement = document.createElement("p");
    antwortparagraph.innerText = rückgabenstring;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
async function datenschickenMongo(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>data);
    let _url: RequestInfo = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/senden";
    _url = _url + "?" + query.toString();
    let antwort: Response = await fetch(_url);
    let rückgabe: string = await antwort.text();
    console.log(rückgabe);
}
document.getElementById("btnschicken").addEventListener("click", datenschickenMongo);
document.getElementById("btnempfangen").addEventListener("click", datenempfangenMongo);

//xd




