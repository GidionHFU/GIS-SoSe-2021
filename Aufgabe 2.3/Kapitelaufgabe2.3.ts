//Aufgabe 2
interface Endprodukt { //b) Hier ist das Interface welches alle Ausgewählten Elemente speichert
    Waffel: Teig;
    Soßen: Soßen;
    Früchte: Früchte;
    Toppings: Toppings;
    Eis: Eis;
    Preisgesammt: number; //Summiert sich je nach Wahl
}

interface Teig { //a) Klassen welche alle wichtigen Wahlmöglichkeiten haben

    vegan: boolean;
    normal: boolean;
    protein: boolean;
    preisTeig: number;


}

interface Soßen {
    vanillesoße: boolean ;
    schokolade: boolean ;
    vollmilch: boolean ;
    mangosoße: boolean ;
    kiwisoße: boolean ;
    erdbeersoße: boolean ;
    erdnussbutter: boolean ;
    apfelmus: boolean ;
    karamelsoße: boolean ;
    preisprosoße: number;

}
interface Früchte {
    apfel: boolean;
    birne: boolean;
    banane: boolean ;
    erdbeere: boolean ;
    kirsche: boolean ;
    brombeere: boolean ;
    melone: boolean ;
    pfirsich: boolean ;
    kiwi: boolean ;
    preisprofrucht: number;
}
interface Toppings {
    schokoraspeln: boolean ;
    nüssemix: boolean ;
    streusel: boolean ;
    kinderBueno: boolean ;
    oreo: boolean ;
    twix: boolean ;
    mars: boolean ;
    bounty: boolean ;
    smarties: boolean ;
    kinderriegel: boolean ;
    preisprotopping: number;
}
interface Eis {
    vanille: boolean ;
    schoko: boolean ;
    cookies: boolean ;
    nutella: boolean ;
    erdbeere: boolean ;
    straciatella: boolean ;
    preisproeis: number;
}

