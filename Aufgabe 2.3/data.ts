let alleteig: Teig [] = [];
let teigvegan: Teig = {
    vegan: true,
    normal: false,
    protein: false,
    preisTeig: 2.0
};
alleteig.push(teigvegan);
let teignormal: Teig = {
    vegan: false,
    normal: true,
    protein: false,
    preisTeig: 2.0
};
alleteig.push(teignormal);
let teigprotein: Teig = {
    vegan: false,
    normal: false,
    protein: true,
    preisTeig: 2.0
};
alleteig.push(teigprotein);

//Soßen
let allesoßen: Soßen[] = [];
let ohnesoße: Soßen = {
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
let früchtesoße: Soßen = {
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
allesoßen.push(früchtesoße);
let schokokaramellsoße: Soßen = {
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
let erdnussbutterkaramellsoße: Soßen = {
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
let allefrüchte: Früchte[] = [];
let ohneFrüchte: Früchte = {
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
let beerenFrüchteMix: Früchte = {
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
let apfelBirneMix: Früchte = {
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
let kiwiBananeMix: Früchte = {
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
let melonePfirsichMix: Früchte = {
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
let apfelKirschMix: Früchte = {
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
let alletoppings: Toppings[] = [];
let ohneTopping: Toppings = {
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

let schokoToppings: Toppings = {
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
let kinderToppings: Toppings = {
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
let nussToppings: Toppings = {
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
let streuselTopping: Toppings = {
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
let kekseTopping: Toppings = {
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
let riegelMixTopping: Toppings = {
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
let alleeis: Eis[] = [];
let ohneeis: Eis = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: false,
    preisproeis: 0
};
alleeis.push(ohneeis);
let vanille: Eis = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: false,
    preisproeis: 0
};
alleeis.push(vanille);
let schokonutella: Eis = {
    vanille: false,
    schoko: true,
    cookies: false,
    nutella: true,
    erdbeere: false,
    straciatella: false,
    preisproeis: 1.0
};
alleeis.push(schokonutella);
let cookies: Eis = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: false,
    preisproeis: 0.5
};
alleeis.push(cookies);
let erdbeere: Eis = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: true,
    straciatella: false,
    preisproeis: 0.5
};
alleeis.push(erdbeere);
let straciatella: Eis = {
    vanille: false,
    schoko: false,
    cookies: false,
    nutella: false,
    erdbeere: false,
    straciatella: true,
    preisproeis: 0.5
};
alleeis.push(straciatella);



