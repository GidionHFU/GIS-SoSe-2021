/*/Aufgabe 2
interface Endprodukt { //b) Hier ist das Interface welches alle Ausgewählten Elemente speichert
    Waffel: Teig;
    Soßen: Soßen[];
    Früchte: Früchte[];
    Topping: Topping[];
    Eis: Eis[];
    Preisgesammt: number; //Summiert sich je nach Wahl
}
interface Teig { //a) Klassen welche alle wichtigen Wahlmöglichkeiten haben

    waffelart: string;
    preis: number;
}
interface Soßen {
    soßenart: string;
    preis: number;
}
interface Früchte {
    früchteart: string;
    preis: number;
}
interface Topping {
    toppingart: string;
    preis: number;
}
interface Eis {
    eisart: string;
    preis: number;
}

*/