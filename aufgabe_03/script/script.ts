namespace Aufgabe03 {
interface Karte {
    farbe: string;
    wert: string;
    id: number;
}

let ziehStapel: Karte[] = [{farbe: "Eichel", wert: "7", id: 1}, {farbe: "Blatt", wert: "7", id: 9}, {farbe: "Herz", wert: "7", id: 17}, {farbe: "Schellen", wert: "7", id: 25}, 
{farbe: "Eichel", wert: "8", id: 2}, {farbe: "Blatt", wert: "8", id: 10}, {farbe: "Herz", wert: "8", id: 18}, {farbe: "Schellen", wert: "8", id: 26}, 
{farbe: "Eichel", wert: "9", id: 3}, {farbe: "Blatt", wert: "9", id: 11}, {farbe: "Herz", wert: "9", id: 19}, {farbe: "Schellen", wert: "9", id: 27}, 
{farbe: "Eichel", wert: "10", id: 4}, {farbe: "Blatt", wert: "10", id: 12}, {farbe: "Herz", wert: "10", id: 20}, {farbe: "Schellen", wert: "10", id: 28}, 
{farbe: "Eichel", wert: "Unter", id: 5}, {farbe: "Blatt", wert: "Unter", id: 13}, {farbe: "Herz", wert: "Unter", id: 21}, {farbe: "Schellen", wert: "Unter", id: 29}, 
{farbe: "Eichel", wert: "Ober", id: 6}, {farbe: "Blatt", wert: "Ober", id: 14}, {farbe: "Herz", wert: "Ober", id: 22}, {farbe: "Schellen", wert: "Ober", id: 30}, 
{farbe: "Eichel", wert: "König", id: 7}, {farbe: "Blatt", wert: "König", id: 15}, {farbe: "Herz", wert: "König", id: 23}, {farbe: "Schellen", wert: "König", id: 31}, 
{farbe: "Eichel", wert: "Ass", id: 8}, {farbe: "Blatt", wert: "Ass", id: 16}, {farbe: "Herz", wert: "Ass", id: 24}, {farbe: "Schellen", wert: "Ass", id: 32} ];

let handKarten: Karte[] = [];
let ablageStapel: Karte[] = [];
let neueKarte: string = "";
let zähler: number = 0;

function kartenAnzahl (): void {
    let mengeAngeben: string = prompt("Wie viele Karten sollen gezogen werden?");
    let anzahl: number = Number(mengeAngeben);
    if (anzahl < 1 || anzahl > 32) {
        console.log( `Es sind maximal ${ziehStapel.length} Karten vorhanden` );
        kartenAnzahl();
    }
    else {
        for (let i: number = 0; i < anzahl; i++) {
            karteAusgeben(anzahl);  
            zähler = i;     
        }
        zähler++;
    }
}

function karteAusgeben(_handkarte: number): void {
    if (ziehStapel.length < 1) 
        alert("Keine Karten mehr im Ziehstapel. :(");
    else {
        let zufall: number = Math.floor((Math.random() * ziehStapel.length) );
        handKarten.push(ziehStapel[zufall]);
        ziehStapel.splice(zufall, 1);
        kartenAnzeigen();
    }
}

function weitereKarteKlick(_event: Event): void {
    if (_event.type == "click") {
        karteAusgeben(1);
    }
}

function weitereKarteLeer(_event: KeyboardEvent): void {
    if (_event.keyCode == 32) {
        karteAusgeben(1);

    }
}

function kartenAnzeigen(): void {
    neueKarte = "";
    for (let i: number = 0; i < handKarten.length; i++) 
        neueKarte += `<div class="${handKarten[i].farbe}" id="${handKarten[i].id}"> ${handKarten[i].farbe} ${handKarten[i].wert} </div> `;
    document.getElementById("Handkarten").innerHTML = neueKarte; 
    for (let i: number = 0; i < handKarten.length; i++) {  
        document.getElementById(handKarten[i].id.toString()).addEventListener("click", karteAblegen);
    }
}

function karteAblegen(_event: MouseEvent): void {
    console.log(_event.target + " abgelegt werden!");
    
}

function kartenSortieren (): void {
    handKarten.sort(function (a: Karte, b: Karte ): number {
        return a.id - b.id;        
        }
    );
    kartenAnzeigen();
}


document.getElementById("Nachzieh").addEventListener("click", weitereKarteKlick);
document.getElementById("Button").addEventListener("click", kartenSortieren);
document.addEventListener("keydown", weitereKarteLeer);
/*
function handleKeydown(_event: Event): void {
    if (_event. == )
    console.log(_event);
}
*/
kartenAnzahl();
}