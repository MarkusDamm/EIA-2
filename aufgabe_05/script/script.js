var A5;
(function (A5) {
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
        for (let key in A5.alleDaten) {
            let eisKeys = A5.alleDaten[key];
            /*
            console.group(key);
            console.dir(eisKeys);
            console.groupEnd();
            */
            for (let i = 0; i < eisKeys.length; i++) {
                if (key == "Zusätze") {
                    zusatz.push(eisKeys[i].coolerName);
                    stringZusaetze += `${eisKeys[i].coolerName}
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
        if (ziel.value == "liefer1" || ziel.value == "liefer3") {
            preisLieferung = 0;
        }
        if (ziel.value == "liefer2") {
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
        if (document.getElementById("bestellung").innerHTML == "Ihre Bestellung beinhaltet: ...")
            alert("Bitte stellen Sie Ihr Wunscheis zusammen.");
        else if (document.getElementsByName("Behaelter")[0].checked == false && document.getElementsByName("Behaelter")[1].checked == false) //wie Z.63
            alert("Bitte einen Behäter auswählen.");
        else if (document.getElementsByName("Lieferung")[0].checked == false && document.getElementsByName("Lieferung")[1].checked == false && document.getElementsByName("Lieferung")[2].checked == false)
            alert("Bitte eine Lieferoption wählen.");
        else if (document.getElementsByName("Login")[0].value == "" || document.getElementsByName("Login")[1].value == "")
            alert("Bitte Benutzername und Passwort eingeben.");
        else if (document.getElementsByName("Adresse")[0].value == "" || document.getElementsByName("Adresse")[1].value == "" || document.getElementsByName("Adresse")[2].value == "")
            alert("Bitte Ihre Adresse eingeben.");
        else
            alert("Daten wurden gesendet :D ");
    }
    seiteLaden();
})(A5 || (A5 = {}));
//# sourceMappingURL=script.js.map