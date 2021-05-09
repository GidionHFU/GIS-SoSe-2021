"use strict";
let endproduktwaffel = {
    Waffel: null,
    Soßen: null,
    Früchte: null,
    Toppings: null,
    Eis: null,
    Preisgesammt: null
};
//Teigauswahl
function teigauswahlvegan() {
    endproduktwaffel.Waffel = teigvegan;
    console.log("Veganer Teig wurde gespeichert");
}
function teigauswahlnormal() {
    endproduktwaffel.Waffel = teignormal;
    console.log("Normaler Teig wurde gespeichert");
}
function teigauswahlprotein() {
    endproduktwaffel.Waffel = teigprotein;
    console.log("Protein Teig wurde gespeichert");
}
//Soßenauswahl
function soßenAuswahlOhneSoße() {
    endproduktwaffel.Soßen = ohnesoße;
}
function soßenAuswahlFrüchteSoße() {
    endproduktwaffel.Soßen = früchtesoße;
}
function soßenAuswahlSchokoKaramellSoße() {
    endproduktwaffel.Soßen = schokokaramellsoße;
}
function soßenAuswahlErdnussbutterKaramellSoße() {
    endproduktwaffel.Soßen = erdnussbutterkaramellsoße;
}
//Früchteauswahl
function früchteAuswahlOhneFrüchte() {
    endproduktwaffel.Früchte = ohneFrüchte;
}
function früchteAuswahlBeerenfrpüchteMix() {
    endproduktwaffel.Früchte = beerenFrüchteMix;
}
function früchteAuswahlApfelBirneMix() {
    endproduktwaffel.Früchte = apfelBirneMix;
}
function früchteAuswahlApfelKirscheMix() {
    endproduktwaffel.Früchte = apfelKirschMix;
}
function früchteAuswahlKiwiBanane() {
    endproduktwaffel.Früchte = kiwiBananeMix;
}
function früchteAuswahlMelonePfirsich() {
    endproduktwaffel.Früchte = melonePfirsichMix;
}
//Toppingauswahl
function toppingauswahlOhneTopping() {
    endproduktwaffel.Toppings = ohneTopping;
}
function toppingauswahlSchokoToppings() {
    endproduktwaffel.Toppings = schokoToppings;
}
function toppingauswahlKinderToppings() {
    endproduktwaffel.Toppings = kinderToppings;
}
function toppingauswahlNussmixTopping() {
    endproduktwaffel.Toppings = nussToppings;
}
function toppingauswahlStreuselTopping() {
    endproduktwaffel.Toppings = streuselTopping;
}
function toppingauswahlKekseTopping() {
    endproduktwaffel.Toppings = kekseTopping;
}
function toppingauswahlReigelmixTopping() {
    endproduktwaffel.Toppings = riegelMixTopping;
}
//Eisauswahl
function eisAuswahlOhneEis() {
    endproduktwaffel.Eis = ohneeis;
}
function eisAuswahlVanilleEis() {
    endproduktwaffel.Eis = vanille;
}
function eisAuswahlSchokonutellaEis() {
    endproduktwaffel.Eis = schokonutella;
}
function eisAuswahlCookiesEis() {
    endproduktwaffel.Eis = cookies;
}
function eisAuswahlErdbeereEis() {
    endproduktwaffel.Eis = erdbeere;
}
function eisAuswahlStraciatellaEis() {
    endproduktwaffel.Eis = straciatella;
}
let alleauswahlmöglichkeiten = document.createElement("div");
alleauswahlmöglichkeiten.id = "hauptdiv";
alleauswahlmöglichkeiten.style.marginTop = "200px";
alleauswahlmöglichkeiten.style.textAlign = "center";
document.body.appendChild(alleauswahlmöglichkeiten);
let teigOptionNormal = document.createElement("div");
teigOptionNormal.id = "TeigOption1";
teigOptionNormal.style.width = "200px";
teigOptionNormal.style.height = "30px";
teigOptionNormal.style.background = "rgb(202, 32, 32)";
teigOptionNormal.style.borderRadius = "30px 30px 30px 30px";
teigOptionNormal.style.display = "inline-block";
teigOptionNormal.style.cssFloat = "left";
document.getElementById("hauptdiv").appendChild(teigOptionNormal);
teigOptionNormal.innerHTML = "Option 1: Normaler Teig";
teigOptionNormal.addEventListener("click", teigauswahlnormal);
let teigOption1Bild = document.createElement("img"); //Placeholder für das richtige Bild
teigOption1Bild.src = "media/X.png";
teigOption1Bild.style.width = "200px";
document.getElementById("TeigOption1").appendChild(teigOption1Bild);
let teigOptionProtein = document.createElement("div");
teigOptionProtein.id = "TeigOption2";
teigOptionProtein.style.width = "200px";
teigOptionProtein.style.height = "30px";
teigOptionProtein.style.background = "rgb(202, 32, 32)";
teigOptionProtein.style.borderRadius = "30px 30px 30px 30px";
teigOptionProtein.style.display = "inline-block";
teigOptionProtein.style.margin = "0";
document.getElementById("hauptdiv").appendChild(teigOptionProtein);
teigOptionProtein.innerHTML = "Option 1: Normaler Teig";
teigOptionProtein.addEventListener("click", teigauswahlprotein);
let teigOption2Bild = document.createElement("img"); //Placeholder für das richtige Bild
teigOption2Bild.src = "media/X.png";
teigOption2Bild.style.width = "200px";
document.getElementById("TeigOption2").appendChild(teigOption2Bild);
let teigOptionVegan = document.createElement("div");
teigOptionVegan.id = "TeigOption3";
teigOptionVegan.style.width = "200px";
teigOptionVegan.style.height = "30px";
teigOptionVegan.style.background = "rgb(202, 32, 32)";
teigOptionVegan.style.borderRadius = "30px 30px 30px 30px";
teigOptionVegan.style.display = "inline-block";
teigOptionVegan.style.cssFloat = "right";
document.getElementById("hauptdiv").appendChild(teigOptionVegan);
teigOptionVegan.innerHTML = "Option 3: Veganer Teig";
teigOptionVegan.addEventListener("click", teigauswahlvegan);
let teigOption3Bild = document.createElement("img"); //Placeholder für das richtige Bild
teigOption3Bild.src = "media/X.png";
teigOption3Bild.style.width = "200px";
document.getElementById("TeigOption3").appendChild(teigOption3Bild);
//Hoffe mal das stimmt soweit, ich frage mich nur, falls man auf eine weitere Seite leitet, wird die auswahl auf dieser Seite dann gespeichert?
//# sourceMappingURL=script.js.map