//Markus Damm, MKB2-B
import * as Http from "http";
import * as Url from "url";

namespace L05_Server {
	console.log("Starting server");
	let port: number = Number(process.env.PORT);
	if (!port)
		port = 8100;

	let server: Http.Server = Http.createServer();
	server.addListener("request", handleRequest);
	server.addListener("listening", handleListen);
	server.listen(port);

	function handleListen(): void {
		console.log("Listening");
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
		console.log("I hear voices!");

		_response.setHeader("content-type", "text/html; charset=utf-8");
		_response.setHeader("Access-Control-Allow-Origin", "*");

		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query)
			_response.write(key + ":" + url.query[key] + "<br/>");

		// let jsonString: string = JSON.stringify(url.query);
		// _response.write(jsonString);

		_response.end();
	}
}

/*
import * as Http from "http";
//Kreiert ein Http-Objekt und hängt dann alle möglichen Importe im http-Modul an das Http-Objekt
namespace L05_Server {	
	//Gibt dem Abschnitt den Namen L05_Server
	console.log("Starting server");
	//Nachricht in der Console
	let port: number = Number(process.env.PORT);
	//erstellt die Variable port, Typ number, der aktuelle Wert soll dem Port entsprechen, wo gerade der Prozess ausgeführt wird
	if (!port)
	//Falls kein Port festgelegt ist...
		port = 8100;
		// ist er gleich 8100
	let server: Http.Server = Http.createServer();
	//erstellt die Variable server, Typ Http.Server, der aktuelle Wert entspricht der createServer-Funktion
	server.addListener("request", handleRequest);
	//Hängt einen Listener an den Server, der beim Event "request" die Funktion handleRequest ausführt
	server.addListener("listening", handleListen);
	//hier hört der Listener auf das Event listening und führt dann handleListen aus
	server.listen(port);
	//die Funktion listen auf dem Server wird mit port als Parameter aufgerufen
	function handleListen(): void {
	//Die handleListen-Funktion vom Typ void benötigt keine Parameter und...
		console.log("Listening");
		//gibt nur "Listening" in der Console aus
	}
	//Ende der Funktion
	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
	//Die Funktion handelRequest, Typ: void, benötigt zwei Parameter 
		console.log("I hear voices in my head! They council me, they understand. They talk to me...");
		//Einfache Ausgabe in der Console
		_response.setHeader("content-type", "text/html; charset=utf-8");
		//Setzt den content-type im header auf den Wert "text/html" und "charset=utf-8"
		_response.setHeader("Access-Control-Allow-Origin", "*");
		//Erlaubt Zugriff aus * = allen Quellen
		_response.write(_request.url);
		//Sendet die header-Infos und die URL der Anfrage an den Client
		_response.end();
		//Signalisiert dem Server, dass alle Daten gesendet wurden
	}
	//Ende der Funktion
}
//Ende des Namespace
*/