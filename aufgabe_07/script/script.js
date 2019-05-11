var A7;
(function (A7) {
    let preis;
    let preisKugel = 0;
    let preisZusatz = 0;
    let preisLieferung = 0;
    let kugeln = [];
    let zusatz = [];
    let bestellung;
    let ziel;
    let addresse = "https://fuwa-eia2.herokuapp.com/";
    let urlString = "";
    window.addEventListener("load", seiteLaden);
    function seiteLaden() {
        console.log("Funktion Seite Laden");
        document.addEventListener("change", veraenderung);
        document.getElementById("button").addEventListener("click", pruefen);
        document.getElementById("abschicken").addEventListener("click", vorbereiten);
        let stringEissorten = "";
        let stringZusaetze = "";
        for (let key in A7.alleDaten) {
            let eisKeys = A7.alleDaten[key];
            for (let i = 0; i < eisKeys.length; i++) {
                if (key == "Zusätze") {
                    zusatz.push(eisKeys[i].coolerName);
                    stringZusaetze += `<label for="${eisKeys[i].coolerName}">${eisKeys[i].coolerName}</label>
                    <input type="checkbox" name="${eisKeys[i].coolerName}" id="${eisKeys[i].coolerName}" class ="zusaetze"  value="check${i + 1}" id="check${i + 1}"> <br>`;
                }
                else if (key == "Eissorten") {
                    kugeln.push(eisKeys[i].coolerName);
                    stringEissorten += `${eisKeys[i].coolerName}
                    <input type="number" name="${eisKeys[i].coolerName}" id="${eisKeys[i].coolerName}" class="eis" step="1" min="0" max="10" value="0"> <br>`;
                }
            }
        }
        document.getElementById("Eissorten").innerHTML += stringEissorten;
        document.getElementById("Zusätze").innerHTML += stringZusaetze;
    }
    function veraenderung(_event) {
        ziel = _event.target;
        bestellung = "Ihre Bestellung beinhaltet: </br>";
        //console.log("Changed " + ziel.name + " to " + ziel.value);
        if (ziel.type == "number") {
            //console.log("Changed " + ziel.name );
            preisKugel = 0;
            for (let i = 0; i < kugeln.length; i++) {
                ziel = document.getElementById(kugeln[i]); //Habe versucht den Fehler mit einer Variable vom Typ HTMLElement zu beheben, gibt dann aber einen anderen Fehler aus :/
                //console.log(ziel);
                if (Number(ziel.value) > 10)
                    ziel.value = "10";
                preisKugel += Number(ziel.value) * 0.7;
            }
        }
        if (ziel.type == "checkbox") {
            preisZusatz = 0;
            for (let i = 0; i < zusatz.length; i++) {
                ziel = document.getElementById(zusatz[i]); //wie Z.22
                if (ziel.checked == true) {
                    preisZusatz += 0.3;
                }
            }
        }
        if (ziel.id == "liefer1" || ziel.id == "liefer3") {
            preisLieferung = 0;
        }
        if (ziel.id == "liefer2") {
            preisLieferung = 0.5;
        }
        preis = preisKugel + preisZusatz + preisLieferung;
        document.getElementById("preis").innerHTML = preis.toFixed(2) + "€";
        bestellungAnzeigen();
    }
    function bestellungAnzeigen() {
        for (let i = 0; i < kugeln.length; i++) {
            ziel = document.getElementById(kugeln[i]);
            if (Number(ziel.value) > 0)
                bestellung += ziel.value + " Kugel(n) " + ziel.name + "</br>";
        }
        for (let i = 0; i < zusatz.length; i++) {
            ziel = document.getElementById(zusatz[i]);
            if (ziel.checked == true)
                bestellung += ziel.name + "</br>";
        }
        if (document.getElementById("liefer2").checked == true) //.checked funktioniert trotzdem, Alternative nicht bekannt
            bestellung += "Expresslieferung";
        document.getElementById("bestellung").innerHTML = bestellung;
    }
    function pruefen() {
        console.log("Daten werden geprüft");
        let ueberpruefung = "";
        let eisGewaehlt = false;
        //  if (document.getElementById("bestellung").innerHTML == "Ihre Bestellung beinhaltet: ...")
        //      ueberpruefung += "Bitte stellen Sie Ihr Wunscheis zusammen.";
        for (let i = 0; i < A7.alleDaten["Eissorten"].length; i++) {
            ziel = document.getElementById(A7.alleDaten["Eissorten"][i].coolerName);
            if (Number(ziel.value) > 0)
                eisGewaehlt = true;
        }
        if (eisGewaehlt == false)
            ueberpruefung += "Bitte stellen Sie Ihr Wunscheis zusammen.  ";
        if (document.getElementsByName("Behaelter")[0].checked == false && document.getElementsByName("Behaelter")[1].checked == false) //wie Z.63
            ueberpruefung += "Bitte einen Behäter auswählen.  ";
        if (document.getElementsByName("Lieferung")[0].checked == false && document.getElementsByName("Lieferung")[1].checked == false && document.getElementsByName("Lieferung")[2].checked == false)
            ueberpruefung += "Bitte eine Lieferoption wählen.  ";
        if (document.getElementsByName("Login")[0].value == "" || document.getElementsByName("Login")[1].value == "")
            ueberpruefung += "Bitte Benutzername und Passwort eingeben.  ";
        if (document.getElementsByName("Adresse")[0].value == "" || document.getElementsByName("Adresse")[1].value == "" || document.getElementsByName("Adresse")[2].value == "")
            ueberpruefung += "Bitte Ihre Adresse eingeben.  ";
        if (ueberpruefung == "")
            ueberpruefung = "Daten wurden gesendet :D ";
        alert(ueberpruefung);
    }
    function vorbereiten() {
        urlString = "?";
        let verarbeitung;
        let j = 1;
        for (let i = 0; i < document.getElementsByClassName("radio").length; i++) {
            verarbeitung = document.getElementsByClassName("radio")[i];
            if (verarbeitung.checked == true)
                urlString += "Behaelter=" + verarbeitung.value + "&";
        }
        for (let i = 0; i < document.getElementsByClassName("eis").length; i++) {
            verarbeitung = document.getElementsByClassName("eis")[i];
            if (Number(verarbeitung.value) > 0)
                urlString += `Eis_${j++}=` + verarbeitung.name + "_x_" + verarbeitung.value + "&";
        }
        j = 1;
        for (let i = 0; i < document.getElementsByClassName("zusaetze").length; i++) {
            verarbeitung = document.getElementsByClassName("zusaetze")[i];
            if (verarbeitung.checked == true)
                urlString += `Zusatz_${j++}=` + verarbeitung.name + "&";
        }
        urlString += `Preis=` + document.getElementById("preis").innerText;
        if (urlString.endsWith("&"))
            urlString = urlString.substr(0, urlString.length - 1);
        console.log(urlString);
        anfrageAbsenden(urlString);
    }
    function anfrageAbsenden(_urlAdresse) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", addresse + _urlAdresse, true);
        xhr.addEventListener("readystatechange", statusaenderungVerarbeiten);
        xhr.send();
    }
    function statusaenderungVerarbeiten(_event) {
        let xhr = _event.target;
        //console.log(xhr);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            // Neues Objekt im HTML Anlegen, darin die Daten anzeigen
            if (document.getElementById("VerarbeiteteBestellung")) {
                document.getElementById("main").insertBefore(document.createElement("fieldset"), document.getElementById("BehaelterField"));
                document.getElementsByTagName("fieldset")[0].setAttribute("id", "VerarbeiteteBestellung");
            }
            let htmlString = "<legend>Ihre Bestellung</legend>";
            htmlString += xhr.response;
            //Preis wäre vielleicht noch hilfreich xD
            document.getElementById("VerarbeiteteBestellung").innerHTML = htmlString;
            //console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            //console.log("response: " + xhr.response);
        }
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=script.js.map