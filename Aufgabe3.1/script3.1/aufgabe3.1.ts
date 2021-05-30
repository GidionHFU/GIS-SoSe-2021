//Aufgabe 3.1


let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
btn.addEventListener("click", datenschicken);



async function datenschicken(): Promise<void> {
    let data: FormData = new FormData(document.forms[0]);
    console.log("Daten:" + data.get("name"));
    for (let entry of data) {
        console.log(entry);
        console.log("name: " + entry[0]); // entry[0] gibt den String des "name-attribute" zurück
        console.log("value: " + entry[1]);  // entry [1] gibt den value FormDataEntryValue zurück. Hier unnötig
    }
    serverantwort("https://gissosegidionhfu.herokuapp.com/");
}





async function serverantwort(_url: RequestInfo): Promise<void> {  
    let query: URLSearchParams = new URLSearchParams(<any>FormData);
    _url = _url + "?" + query.toString();
    console.log("Ihre Auswahl wurde an die folgende Url geschickt:  " + _url);
    let antwort: Response = await fetch(_url);
    let rückgabe: string = await antwort.text();
    let antwortparagraph: HTMLDivElement = document.createElement("div");
    antwortparagraph.innerText = rückgabe;
    document.getElementById("ausgewählt").appendChild(antwortparagraph);
}
