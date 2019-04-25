namespace A4 {
    let preis: number;
    let preisKugel: number = 0;
    let preisZusatz: number = 0;
    let preisLieferung: number = 0;
    let kugeln: string[] = ["Vanille", "Schoko", "Erdbeere", "Kaugummi"]
    let zusatz: string[] = ["Schokosoße", "Streußel", "Sahne", "Smarties"]
    let bestellung: string;
    let ziel: HTMLInputElement;

    document.addEventListener("change", veraenderung);
    document.getElementById("button").addEventListener("click", pruefen)

    function veraenderung(_event: Event): void {
        ziel = <HTMLInputElement>_event.target;
        bestellung = "Ihre Bestellung beinhaltet: </br>";
        console.log("Changed " + ziel.name + " to " + ziel.value);
        if (ziel.type == "number") {
            console.log("Changed " + ziel.name );
            preisKugel = 0;
            for (let i: number = 0; i < kugeln.length; i++) {
                ziel = document.getElementById(kugeln[i]); //Habe versucht den Fehler mit einer Variable vom Typ HTMLElement zu beheben, gibt dann aber einen anderen Fehler aus :/
                if (Number(ziel.value) > 10) 
                    ziel.value = "10";              
                preisKugel += Number(ziel.value) * 0.6;
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
            if (Number(ziel.value) > 0) {
                if (Number(ziel.value) > 10)  
                    ziel.value = "10";          //vielleicht unnötig (da Z.23 + 24)
                bestellung += ziel.value + " Kugel(n) " + ziel.name + "</br>";
            }
        }
        for (let i: number = 0; i < zusatz.length; i++) {
            ziel = document.getElementById(zusatz[i]);
            if (ziel.checked == true) {
                bestellung += ziel.name + "</br>";
            }      
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
    }
}