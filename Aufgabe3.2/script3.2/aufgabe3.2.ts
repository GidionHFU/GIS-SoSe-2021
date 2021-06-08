//Aufgabe 3.2
interface JsonObjConvert {
    email: string;
    username: string;
    pw: string;
    pwbestätigt: string;
    biographie: string;
}

async function datenschickenhtml(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>data);
    let _url: RequestInfo = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/SendInHtml";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort: Response = await fetch(_url);
    let rückgabe: string = await antwort.text();
    let antwortparagraph: HTMLDivElement = document.createElement("div");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}

async function datenschickenjson(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>data);
    let _url: RequestInfo = "https://gissosegidionhfu.herokuapp.com";
    _url = _url + "/sendInJsonString";
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort: Response = await fetch(_url);
    let rückgabe: JsonObjConvert = await antwort.json();
    console.log(rückgabe);
    
}

document.getElementById("btnhtml").addEventListener("click", datenschickenhtml);
document.getElementById("btnJSON").addEventListener("click", datenschickenjson);

//xd




