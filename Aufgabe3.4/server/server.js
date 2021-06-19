"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://tutuser:tutuser1@gis-gidion-sose.sf2g7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    console.log("Starting server"); //Ausgabe in der Konsole wenn der Server gestartet wird
    let port = Number(process.env.PORT); //schaut ob ein Port gesetz ist
    if (!port) // wenn kein port gesetzt ist, ist der Port 8100
        port = 8100; //Port = Hafen / Kanal auf dem übertragen wird
    function startServer(_port) {
        let server = Http.createServer(); // Server wird erstellt
        server.addListener("request", handleRequest); // wie /addeventListener und kümmert sich um die func handleListen
        server.listen(port);
        console.log("Port des Servers:" + port);
    }
    startServer(port);
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt typ und codierung an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        if (_request.url) {
            let newurl = Url.parse(_request.url, true);
            let path = newurl.pathname;
            let user = {
                email: newurl.query.email,
                username: newurl.query.username,
                pw: newurl.query.pw,
                pwbestätigt: newurl.query.pwbestätigt,
                biographie: newurl.query.biographie
            };
            if (path === "/senden") {
                let jsonstring = JSON.stringify(newurl.query);
                sendtomongo(user);
            }
            else if (path === "/empfangen") {
                let rückgabe = await getMongoDatabase();
                console.log("worked");
                _response.write(JSON.stringify(rückgabe));
            }
        }
        _response.end();
    }
    async function sendtomongo(obj) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(databaseUrl, options);
        await mongoClient.connect();
        let orders = mongoClient.db("User").collection("UserInfos");
        orders.insertOne(obj);
    }
    async function getMongoDatabase() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(databaseUrl, options);
        await mongoClient.connect();
        let orders = mongoClient.db("User").collection("UserInfos");
        let cursor = orders.find();
        let ausgabe = await cursor.toArray();
        return ausgabe;
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=server.js.map