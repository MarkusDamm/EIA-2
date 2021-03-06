namespace A5 {
    let preis: number;
    let preisKugel: number = 0;
    let preisZusatz: number = 0;
    let preisLieferung: number = 0;
    let kugeln: string[] = [];
    let zusatz: string[] = [];
    let bestellung: string;
    let ziel: HTMLInputElement;

    export interface CooleDaten {
        coolerName: string;
        cooleMenge: number; //wird noch nicht genutzt, vll. in Preis umbenennen
    }
    export interface EisDaten {
        [key: string]: CooleDaten[];
    }

    document.addEventListener("change", veraenderung);
    document.getElementById("button").addEventListener("click", pruefen);

    function seiteLaden(): void {
        console.log("Funktion Seite Laden");
        let stringEissorten: string = "";
        let stringZusaetze: string = "";
        for (let key in alleDaten) {    
            let eisKeys: CooleDaten[] = alleDaten[key];
            /*
            console.group(key);
            console.dir(eisKeys);
            console.groupEnd();
            */
            for (let i: number = 0; i < eisKeys.length; i++) {
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


    function veraenderung(_event: Event): void {
        ziel = <HTMLInputElement>_event.target;
        bestellung = "Ihre Bestellung beinhaltet: </br>";
        console.log("Changed " + ziel.name + " to " + ziel.value);
        if (ziel.type == "number") {
            console.log("Changed " + ziel.name );
            preisKugel = 0;
            for (let i: number = 0; i < kugeln.length; i++) {
                ziel = document.getElementById(kugeln[i]); //Habe versucht den Fehler mit einer Variable vom Typ HTMLElement zu beheben, gibt dann aber einen anderen Fehler aus :/
                //console.log(ziel);
                if (Number(ziel.value) > 10) 
                    ziel.value = "10";              
                preisKugel += Number(ziel.value) * 0.7;
                }
            }
        if (ziel.type == "checkbox") {
            preisZusatz = 0;
            for (let i: number = 0; i < zusatz.length; i++) {
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

    function bestellungAnzeigen(): void {
        for (let i: number = 0; i < kugeln.length; i++) {
            ziel = document.getElementById(kugeln[i]); 
            if (Number(ziel.value) > 0)
                bestellung += ziel.value + " Kugel(n) " + ziel.name + "</br>";
        }
        for (let i: number = 0; i < zusatz.length; i++) {
            ziel = document.getElementById(zusatz[i]);
            if (ziel.checked == true) 
                bestellung += ziel.name + "</br>";
        }
        if (document.getElementById("liefer2").checked == true) //.checked funktioniert trotzdem, Alternative nicht bekannt
            bestellung += "Expresslieferung";
        document.getElementById("bestellung").innerHTML = bestellung;
    }
    
    function pruefen (): void {
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
        else alert("Daten wurden gesendet :D ");
    }

    seiteLaden();
}