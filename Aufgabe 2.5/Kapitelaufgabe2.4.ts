//Aufgabe 2
interface Endprodukt { //b) Hier ist das Interface welches alle Ausgewählten Elemente speichert
    Waffel: Teig;
    Soßen: Soßen[];
    Früchte: Früchte[];
    Topping: Topping[];
    Eis: Eis[];
    Preisgesammt: number; //Summiert sich je nach Wahl
}
interface Teig { //a) Klassen welche alle wichtigen Wahlmöglichkeiten haben

    art: string;
    preis: number;
}
interface Soßen {
    art: string;
    preis: number;
}
interface Früchte {
    eart: string;
    preis: number;
}
interface Topping {
    art: string;
    preis: number;
}
interface Eis {
    art: string;
    preis: number;
}

interface Allemöglichkeiten {
    teig: Teig [];
    soßen: Soßen [];
    früchte: Früchte [];
    topping: Topping[];
    eis: Eis [];
}
