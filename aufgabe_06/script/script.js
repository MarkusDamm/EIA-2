var A6;
(function (A6) {
    let preis;
    let preisKugel = 0;
    let preisZusatz = 0;
    let preisLieferung = 0;
    let kugeln = [];
    let zusatz = [];
    let bestellung;
    let ziel;
    document.addEventListener("change", veraenderung);
    document.getElementById("button").addEventListener("click", pruefen);
    function seiteLaden() {
        console.log("Funktion Seite Laden");
        let stringEissorten = "";
        let stringZusaetze = "";
        for (let key in A6.alleDaten) {
            let eisKeys = A6.alleDaten[key];
            /*
            console.group(key);
            console.dir(eisKeys);
            console.groupEnd();
            */
            for (let i = 0; i < eisKeys.length; i++) {
                if (key == "Zusätze") {
                    zusatz.push(eisKeys[i].coolerName);
                    stringZusaetze += `<label for="${eisKeys[i].coolerName}">${eisKeys[i].coolerName}</label>
                    <input type="checkbox" name="${eisKeys[i].coolerName}" id="${eisKeys[i].coolerName}" value="check${i + 1}" id="check${i + 1}"> <br>`;
                }
                else if (key == "Eissorten") {
                    kugeln.push(eisKeys[i].coolerName);
                    stringEissorten += `${eisKeys[i].coolerName}
                    <input type="number" name="${eisKeys[i].coolerName}" id="${eisKeys[i].coolerName}" step="1" min="0" max="10" value="0"> <br>`;
                }
            }
        }
        document.getElementById("Eissorten").innerHTML += stringEissorten;
        document.getElementById("Zusätze").innerHTML += stringZusaetze;
    }
    function veraenderung(_event) {
        ziel = _event.target;
        bestellung = "Ihre Bestellung beinhaltet: </br>";
        console.log("Changed " + ziel.name + " to " + ziel.value);
        if (ziel.type == "number") {
            console.log("Changed " + ziel.name);
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
        if (document.getElementById("bestellung").innerHTML == "Ihre Bestellung beinhaltet: ...")
            ueberpruefung += "Bitte stellen Sie Ihr Wunscheis zusammen.";
        if (document.getElementsByName("Behaelter")[0].checked == false && document.getElementsByName("Behaelter")[1].checked == false) //wie Z.63
            ueberpruefung += "Bitte einen Behäter auswählen.";
        if (document.getElementsByName("Lieferung")[0].checked == false && document.getElementsByName("Lieferung")[1].checked == false && document.getElementsByName("Lieferung")[2].checked == false)
            ueberpruefung += "Bitte eine Lieferoption wählen.";
        if (document.getElementsByName("Login")[0].value == "" || document.getElementsByName("Login")[1].value == "")
            ueberpruefung += "Bitte Benutzername und Passwort eingeben.";
        if (document.getElementsByName("Adresse")[0].value == "" || document.getElementsByName("Adresse")[1].value == "" || document.getElementsByName("Adresse")[2].value == "")
            ueberpruefung += "Bitte Ihre Adresse eingeben.";
        if (ueberpruefung == "")
            ueberpruefung = "Daten wurden gesendet :D ";
        alert(ueberpruefung);
    }
    seiteLaden();
})(A6 || (A6 = {}));
//# sourceMappingURL=script.js.map