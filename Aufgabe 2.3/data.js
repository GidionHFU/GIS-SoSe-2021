"use strict";
//Soßen
let allesoßen = [];
let ohnesoße = {
    vanillesoße: false,
    schokolade: false,
    vollmilch: false,
    mangosoße: false,
    kiwisoße: false,
    erdbeersoße: false,
    erdnussbutter: false,
    apfelmus: false,
    karamelsoße: false,
    preisprosoße: 0
};
allesoßen.push(ohnesoße);
let früchtesoßen = {
    vanillesoße: false,
    schokolade: false,
    vollmilch: false,
    mangosoße: true,
    kiwisoße: true,
    erdbeersoße: true,
    erdnussbutter: false,
    apfelmus: false,
    karamelsoße: false,
    preisprosoße: 1.50
};
allesoßen.push(früchtesoßen);
let schokokaramellsoße = {
    vanillesoße: false,
    schokolade: true,
    vollmilch: false,
    mangosoße: false,
    kiwisoße: false,
    erdbeersoße: false,
    erdnussbutter: false,
    apfelmus: false,
    karamelsoße: true,
    preisprosoße: 1.0
};
allesoßen.push(schokokaramellsoße);
let erdnussbutterkaramellsoße = {
    vanillesoße: false,
    schokolade: false,
    vollmilch: false,
    mangosoße: false,
    kiwisoße: false,
    erdbeersoße: false,
    erdnussbutter: true,
    apfelmus: false,
    karamelsoße: true,
    preisprosoße: 1.0
};
allesoßen.push(erdnussbutterkaramellsoße);
//Früchte
let allefrüchte = [];
let ohneFrüchte = {
    apfel: false,
    birne: false,
    banane: false,
    erdbeere: false,
    kirsche: false,
    brombeere: false,
    melone: false,
    pfirsich: false,
    kiwi: false,
    preisprofrucht: 0
};
allefrüchte.push(ohneFrüchte);
let beerenFrüchteMix = {
    apfel: false,
    birne: false,
    banane: false,
    erdbeere: true,
    kirsche: false,
    brombeere: true,
    melone: false,
    pfirsich: false,
    kiwi: false,
    preisprofrucht: 0.5
};
allefrüchte.push(beerenFrüchteMix);
let apfelBirneMix = {
    apfel: true,
    birne: true,
    banane: false,
    erdbeere: true,
    kirsche: false,
    brombeere: true,
    melone: false,
    pfirsich: false,
    kiwi: false,
    preisprofrucht: 0.5
};
allefrüchte.push(apfelBirneMix);
let kiwiBananeMix = {
    apfel: false,
    birne: false,
    banane: true,
    erdbeere: false,
    kirsche: false,
    brombeere: false,
    melone: false,
    pfirsich: false,
    kiwi: true,
    preisprofrucht: 0.5
};
allefrüchte.push(kiwiBananeMix);
let melonePfirsichMix = {
    apfel: false,
    birne: false,
    banane: false,
    erdbeere: false,
    kirsche: false,
    brombeere: false,
    melone: true,
    pfirsich: true,
    kiwi: false,
    preisprofrucht: 0.5
};
allefrüchte.push(melonePfirsichMix);
let apfelKirschMix = {
    apfel: true,
    birne: false,
    banane: false,
    erdbeere: false,
    kirsche: true,
    brombeere: false,
    melone: false,
    pfirsich: false,
    kiwi: false,
    preisprofrucht: 0.5
};
allefrüchte.push(apfelKirschMix);
//Toppings
let alletoppings = [];
let ohneTopping = {
    schokoraspeln: false,
    nüssemix: false,
    streusel: false,
    kinderBueno: false,
    oreo: false,
    twix: false,
    mars: false,
    bounty: false,
    smarties: false,
    kinderriegel: false,
    preisprotopping: 0
};
alletoppings.push(ohneTopping);
let schokoToppings = {
    schokoraspeln: true,
    nüssemix: false,
    streusel: false,
    kinderBueno: true,
    oreo: false,
    twix: false,
    mars: false,
    bounty: false,
    smarties: true,
    kinderriegel: true,
    preisprotopping: 2.0
};
alletoppings.push(schokoToppings);
let kinderToppings = {
    schokoraspeln: false,
    nüssemix: false,
    streusel: false,
    kinderBueno: true,
    oreo: false,
    twix: false,
    mars: false,
    bounty: false,
    smarties: false,
    kinderriegel: true,
    preisprotopping: 1.0
};
alletoppings.push(kinderToppings);
let nussToppings = {
    schokoraspeln: false,
    nüssemix: true,
    streusel: false,
    kinderBueno: false,
    oreo: false,
    twix: false,
    mars: false,
    bounty: false,
    smarties: false,
    kinderriegel: true,
    preisprotopping: 0.5
};
alletoppings.push(nussToppings);
let streuselTopping = {
    schokoraspeln: false,
    nüssemix: false,
    streusel: true,
    kinderBueno: false,
    oreo: false,
    twix: false,
    mars: false,
    bounty: false,
    smarties: false,
    kinderriegel: true,
    preisprotopping: 0.5
};
alletoppings.push(streuselTopping);
let kekseTopping = {
    schokoraspeln: false,
    nüssemix: false,
    streusel: false,
    kinderBueno: false,
    oreo: true,
    twix: false,
    mars: false,
    bounty: false,
    smarties: false,
    kinderriegel: true,
    preisprotopping: 0.5
};
alletoppings.push(kekseTopping);
let riegelMixTopping = {
    schokoraspeln: false,
    nüssemix: false,
    streusel: false,
    kinderBueno: false,
    oreo: false,
    twix: true,
    mars: true,
    bounty: true,
    smarties: false,
    kinderriegel: true,
    preisprotopping: 2.0
};
alletoppings.push(riegelMixTopping);
//Eis
let alleeis = [];
let ohneeis = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: false,
    preisproeis: 0
};
alleeis.push(ohneeis);
let vanille = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: false,
    preisproeis: 0
};
alleeis.push(vanille);
let schokonutella = {
    vanille: false,
    schoko: true,
    cookies: false,
    nutella: true,
    erdbeere: false,
    straciatella: false,
    preisproeis: 1.0
};
alleeis.push(schokonutella);
let cookies = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: false,
    preisproeis: 0.5
};
alleeis.push(cookies);
let erdbeere = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: true,
    straciatella: false,
    preisproeis: 0.5
};
alleeis.push(erdbeere);
let straciatella = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: true,
    preisproeis: 0.5
};
alleeis.push(straciatella);
//# sourceMappingURL=data.js.map