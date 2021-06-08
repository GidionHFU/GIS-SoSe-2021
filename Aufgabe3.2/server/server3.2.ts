import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {
    console.log("Starting server"); //Ausgabe in der Konsole wenn der Server gestartet wird
    let port: number = Number(process.env.PORT); //schaut ob ein Port gesetz ist
    if (!port) // wenn kein port gesetzt ist, ist der Port 8100
        port = 8100; //Port = Hafen / Kanal auf dem übertragen wird

    let server: Http.Server = Http.createServer(); // Server wird erstellt
    server.addListener("request", handleRequest); // wie /addeventListener und kümmert sich um die func handleListen
    server.addListener("listening", handleListen); // führt handlerequest aus, wenn "/irgendwas"nach adresse steht
    server.listen(port);
    console.log("Port des Servers:" + port);
    function handleListen(): void { //gibt einfach listening 
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt typ und codierung an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = url.pathname;
            if (path === "/SendInHtml")
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + " <br/> ");
                }
            else if (path === "/sendInJsonString") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
}