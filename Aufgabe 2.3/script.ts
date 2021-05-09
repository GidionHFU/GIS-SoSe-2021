let endproduktwaffel: Endprodukt = {
    Waffel: null,
    Soßen: null,
    Früchte: null,
    Toppings: null,
    Eis: null,
    Preisgesammt: null
};
//Teigauswahl
function teigauswahlvegan(): void {
    endproduktwaffel.Waffel = teigvegan;
    console.log("Veganer Teig wurde gespeichert");
}
function teigauswahlnormal(): void {
    endproduktwaffel.Waffel = teignormal;
    console.log("Normaler Teig wurde gespeichert");
}
function teigauswahlprotein(): void {
    endproduktwaffel.Waffel = teigprotein;
    console.log("Protein Teig wurde gespeichert");
}

//Soßenauswahl
function soßenAuswahlOhneSoße(): void {
    endproduktwaffel.Soßen = ohnesoße;
}
function soßenAuswahlFrüchteSoße(): void {
    endproduktwaffel.Soßen = früchtesoße;
}
function soßenAuswahlSchokoKaramellSoße(): void {
    endproduktwaffel.Soßen = schokokaramellsoße;
}
function soßenAuswahlErdnussbutterKaramellSoße(): void {
    endproduktwaffel.Soßen = erdnussbutterkaramellsoße;
}

//Früchteauswahl

function früchteAuswahlOhneFrüchte(): void {
    endproduktwaffel.Früchte = ohneFrüchte;
}
function früchteAuswahlBeerenfrpüchteMix(): void {
    endproduktwaffel.Früchte = beerenFrüchteMix;
}
function früchteAuswahlApfelBirneMix(): void {
    endproduktwaffel.Früchte = apfelBirneMix;
}
function früchteAuswahlApfelKirscheMix(): void {
    endproduktwaffel.Früchte = apfelKirschMix;
}
function früchteAuswahlKiwiBanane(): void {
    endproduktwaffel.Früchte = kiwiBananeMix;
}
function früchteAuswahlMelonePfirsich(): void {
    endproduktwaffel.Früchte = melonePfirsichMix;
}

//Toppingauswahl

function toppingauswahlOhneTopping(): void {
    endproduktwaffel.Toppings = ohneTopping;
}
function toppingauswahlSchokoToppings(): void {
    endproduktwaffel.Toppings = schokoToppings;
}
function toppingauswahlKinderToppings(): void {
    endproduktwaffel.Toppings = kinderToppings;
}
function toppingauswahlNussmixTopping(): void {
    endproduktwaffel.Toppings = nussToppings;
}
function toppingauswahlStreuselTopping(): void {
    endproduktwaffel.Toppings = streuselTopping;
}
function toppingauswahlKekseTopping(): void {
    endproduktwaffel.Toppings = kekseTopping;
}
function toppingauswahlReigelmixTopping(): void {
    endproduktwaffel.Toppings = riegelMixTopping;
}

//Eisauswahl

function eisAuswahlOhneEis(): void {
    endproduktwaffel.Eis = ohneeis;
}

function eisAuswahlVanilleEis(): void {
    endproduktwaffel.Eis = vanille;
}

function eisAuswahlSchokonutellaEis(): void {
    endproduktwaffel.Eis = schokonutella;
}

function eisAuswahlCookiesEis(): void {
    endproduktwaffel.Eis = cookies;
}

function eisAuswahlErdbeereEis(): void {
    endproduktwaffel.Eis = erdbeere;
}

function eisAuswahlStraciatellaEis(): void {
    endproduktwaffel.Eis = straciatella;
}

let alleauswahlmöglichkeiten: HTMLDivElement = document.createElement("div");
alleauswahlmöglichkeiten.id = "hauptdiv";
alleauswahlmöglichkeiten.style.marginTop = "200px";
alleauswahlmöglichkeiten.style.textAlign = "center";
document.body.appendChild(alleauswahlmöglichkeiten);


let teigOptionNormal: HTMLDivElement = document.createElement("div");
teigOptionNormal.id = "TeigOption1";
teigOptionNormal.style.width = "200px";
teigOptionNormal.style.height = "30px";
teigOptionNormal.style.background = "rgb(202, 32, 32)";
teigOptionNormal.style.borderRadius =  "30px 30px 30px 30px";
teigOptionNormal.style.display = "inline-block";
teigOptionNormal.style.cssFloat = "left";
document.getElementById("hauptdiv").appendChild(teigOptionNormal);
teigOptionNormal.innerHTML = "Option 1: Normaler Teig";
teigOptionNormal.addEventListener("click", teigauswahlnormal);

let teigOption1Bild: HTMLImageElement = document.createElement("img"); //Placeholder für das richtige Bild
teigOption1Bild.src = "media/X.png";
teigOption1Bild.style.width = "200px"; 
document.getElementById("TeigOption1").appendChild(teigOption1Bild);




let teigOptionProtein: HTMLDivElement = document.createElement("div");
teigOptionProtein.id = "TeigOption2";
teigOptionProtein.style.width = "200px";
teigOptionProtein.style.height = "30px";
teigOptionProtein.style.background = "rgb(202, 32, 32)";
teigOptionProtein.style.borderRadius =  "30px 30px 30px 30px";
teigOptionProtein.style.display = "inline-block";
teigOptionProtein.style.margin = "0";
document.getElementById("hauptdiv").appendChild(teigOptionProtein);
teigOptionProtein.innerHTML = "Option 1: Normaler Teig";
teigOptionProtein.addEventListener("click", teigauswahlprotein);

let teigOption2Bild: HTMLImageElement = document.createElement("img"); //Placeholder für das richtige Bild
teigOption2Bild.src = "media/X.png";
teigOption2Bild.style.width = "200px"; 
document.getElementById("TeigOption2").appendChild(teigOption2Bild);





let teigOptionVegan: HTMLDivElement = document.createElement("div");
teigOptionVegan.id = "TeigOption3";
teigOptionVegan.style.width = "200px";
teigOptionVegan.style.height = "30px";
teigOptionVegan.style.background = "rgb(202, 32, 32)";
teigOptionVegan.style.borderRadius =  "30px 30px 30px 30px";
teigOptionVegan.style.display = "inline-block";
teigOptionVegan.style.cssFloat = "right";
document.getElementById("hauptdiv").appendChild(teigOptionVegan);
teigOptionVegan.innerHTML = "Option 3: Veganer Teig";
teigOptionVegan.addEventListener("click", teigauswahlvegan);

let teigOption3Bild: HTMLImageElement = document.createElement("img"); //Placeholder für das richtige Bild
teigOption3Bild.src = "media/X.png";
teigOption3Bild.style.width = "200px"; 
document.getElementById("TeigOption3").appendChild(teigOption3Bild);


//Hoffe mal das stimmt soweit, ich frage mich nur, falls man auf eine weitere Seite leitet, wird die auswahl auf dieser Seite dann gespeichert?