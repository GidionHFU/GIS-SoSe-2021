import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

interface JsonObjConvert {
    email: string;
    username: string;
    pw: string;
    pwbestätigt: string;
    biographie: string;
}

export namespace P_3_2Server {

    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl: string = "mongodb+srv://tutuser:tutuser1@gis-gidion-sose.sf2g7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


    console.log("Starting server"); //Ausgabe in der Konsole wenn der Server gestartet wird
    let port: number = Number(process.env.PORT); //schaut ob ein Port gesetz ist
    if (!port) // wenn kein port gesetzt ist, ist der Port 8100
        port = 8100; //Port = Hafen / Kanal auf dem übertragen wird




    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); // Server wird erstellt
        server.addListener("request", handleRequest); // wie /addeventListener und kümmert sich um die func handleListen
        server.listen(port);
        console.log("Port des Servers:" + port);

    }
    startServer(port);





    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt typ und codierung an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen



        if (_request.url) {
            let newurl: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = newurl.pathname;
            let user: JsonObjConvert = {    //fix by https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string/57062363#57062363
                email: newurl.query.email as string, //Obj für Ausgabe
                username: newurl.query.username as string,
                pw: newurl.query.pw as string,
                pwbestätigt: newurl.query.pwbestätigt as string,
                biographie: newurl.query.biographie as string
            };

            if (path === "/senden") { //Angelegter user wird in Datenbank gespeichert
                sendtomongo(user);
            }

            else if (path === "/empfangen") { //User werden aus Datenbank ausgelesen
                let rückgabe: JsonObjConvert[] = await getMongoDatabase(); //Json array mit den Usern kommt zurück und wird gespeichert
                console.log("worked"); //wird auf dem Heroku Server angezeigt 
                _response.write(JSON.stringify(rückgabe)); 

            }
        }
        _response.end();
    }



    async function sendtomongo(obj: JsonObjConvert): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options);
        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("User").collection("UserInfos");
        orders.insertOne(obj);
    }



    async function getMongoDatabase(): Promise<JsonObjConvert[]> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options);
        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("User").collection("UserInfos");
        let cursor: Mongo.Cursor = orders.find();
        let ausgabe: JsonObjConvert[] = await cursor.toArray();
        return ausgabe;
    }
}