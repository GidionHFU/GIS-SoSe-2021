"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //Ausgabe in der Konsole wenn der Server gestartet wird
    let port = Number(process.env.PORT); //schaut ob ein Port gesetz ist
    if (!port) // wenn kein port gesetzt ist, ist der Port 8100
        port = 8100; //Port = Hafen / Kanal auf dem übertragen wird
    let server = Http.createServer(); // Server wird erstellt
    server.addListener("request", handleRequest); // wie /addeventListener und kümmert sich um die func handleListen
    server.addListener("listening", handleListen); // führt handlerequest aus, wenn "/irgendwas"nach adresse steht
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt typ und codierung an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        _response.write(_request.url); // gibt die Anfrage wieder zurück auf der seite
        _response.end(); // ende der func
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server3.1.js.map