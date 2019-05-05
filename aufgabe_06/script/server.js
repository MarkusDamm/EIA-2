"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Markus Damm, MKB2-B
const Http = require("http");
//Kreiert ein Http-Objekt und hängt dann alle möglichen Importe im http-Modul an das Http-Objekt
var L05_Server;
(function (L05_Server) {
    //Gibt dem Abschnitt den Namen L05_Server
    console.log("Starting server");
    //Nachricht in der Console
    let port = Number(process.env.PORT);
    //erstellt die Variable port, Typ number, der aktuelle Wert soll dem Port entsprechen, wo gerade der Prozess ausgeführt wird
    if (!port)
        //Falls kein Port festgelegt ist...
        port = 8100;
    // ist er gleich 8100
    let server = Http.createServer();
    //erstellt die Variable server, Typ Http.Server, der aktuelle Wert entspricht der createServer-Funktion
    server.addListener("request", handleRequest);
    //Hängt einen Listener an den Server, der beim Event "request" die Funktion handleRequest ausführt
    server.addListener("listening", handleListen);
    //hier hört der Listener auf das Event listening und führt dann handleListen aus
    server.listen(port);
    //die Funktion listen auf dem Server wird mit port als Parameter aufgerufen
    function handleListen() {
        //Die handleListen-Funktion vom Typ void benötigt keine Parameter und...
        console.log("Listening");
        //gibt nur "Listening" in der Console aus
    }
    //Ende der Funktion
    function handleRequest(_request, _response) {
        //Die Funktion handelRequest, Typ: void, benötigt zwei Parameter 
        console.log("I hear voices!");
        //Einfache Ausgabe in der Console
        _response.setHeader("content-type", "text/html; charset=utf-8");
        //Setzt den content-type im header auf den Wert "text/html" und "charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Setzt "Access-Control-Allow-Origin" im header auf den Wert *
        _response.write(_request.url);
        //Sendet die header-Infos und die URL der Anfrage an den Client
        _response.end();
        //Signalisiert dem Server, dass alle Daten gesendet wurden
    }
    //Ende der Funktion
})(L05_Server || (L05_Server = {}));
//Ende des Namespace
//# sourceMappingURL=server.js.map