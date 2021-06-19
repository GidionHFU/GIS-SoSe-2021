//Aufgabe 3.4



async function datenempfangenMongo(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>data);
    let _url: RequestInfo = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/GetMongo";
    _url = _url + "?" + query.toString();
    let antwort: Response = await fetch(_url);
    let rückgabe: string = await antwort.text();
    let antwortparagraph: HTMLParagraphElement = document.createElement("p");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
async function datenschickenMongo(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>data);
    let _url: RequestInfo = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/SendMongo";
    _url = _url + "?" + query.toString();
    let antwort: Response = await fetch(_url);
    let rückgabe: string = await antwort.text();
    console.log(rückgabe);
}
document.getElementById("btnschicken").addEventListener("click", datenschickenMongo);
document.getElementById("btnempfangen").addEventListener("click", datenempfangenMongo);

//xd




