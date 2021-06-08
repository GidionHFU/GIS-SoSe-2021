"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server"); //Ausgabe in der Konsole wenn der Server gestartet wird
    let port = Number(process.env.PORT); //schaut ob ein Port gesetz ist
    if (!port) // wenn kein port gesetzt ist, ist der Port 8100
        port = 8100; //Port = Hafen / Kanal auf dem übertragen wird
    let server = Http.createServer(); // Server wird erstellt
    server.addListener("request", handleRequest); // wie /addeventListener und kümmert sich um die func handleListen
    server.addListener("listening", handleListen); // führt handlerequest aus, wenn "/irgendwas"nach adresse steht
    server.listen(port);
    console.log("Port des Servers:" + port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt typ und codierung an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path === "/SendInHtml")
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + " | ");
                }
            else if (path === "/sendInJsonString") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=server3.2.js.map