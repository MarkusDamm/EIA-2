namespace Aufgabe02{
interface Karte {
    farbe: string;
    wert: string;
}

let ziehStapel: Karte[] = [{farbe: "Eichel", wert: "7"}, {farbe: "Blatt", wert: "7"}, {farbe: "Herz", wert: "7"}, {farbe: "Schellen", wert: "7"}, 
{farbe: "Eichel", wert: "8"}, {farbe: "Blatt", wert: "8"}, {farbe: "Herz", wert: "8"}, {farbe: "Schellen", wert: "8"}, 
{farbe: "Eichel", wert: "9"}, {farbe: "Blatt", wert: "9"}, {farbe: "Herz", wert: "9"}, {farbe: "Schellen", wert: "9"}, 
{farbe: "Eichel", wert: "10"}, {farbe: "Blatt", wert: "10"}, {farbe: "Herz", wert: "10"}, {farbe: "Schellen", wert: "10"}, 
{farbe: "Eichel", wert: "Unter"}, {farbe: "Blatt", wert: "Unter"}, {farbe: "Herz", wert: "Unter"}, {farbe: "Schellen", wert: "Unter"}, 
{farbe: "Eichel", wert: "Ober"}, {farbe: "Blatt", wert: "Ober"}, {farbe: "Herz", wert: "Ober"}, {farbe: "Schellen", wert: "Ober"}, 
{farbe: "Eichel", wert: "König"}, {farbe: "Blatt", wert: "König"}, {farbe: "Herz", wert: "König"}, {farbe: "Schellen", wert: "König"}, 
{farbe: "Eichel", wert: "Ass"}, {farbe: "Blatt", wert: "Ass"}, {farbe: "Herz", wert: "Ass"}, {farbe: "Schellen", wert: "Ass"} ];

let handKarten: Karte[] = [];

function kartenZiehen(): number {
    let mengeAngeben: string = prompt("Wie viele Karten sollen gezogen werden?");
    let anzahl: number = Number(mengeAngeben);
    return anzahl;
}

function kartenAusgeben(_handkarten: number): void {
    if (_handkarten > ziehStapel.length) 
        console.log( `Es sind maximal ${ziehStapel.length} Karten vorhanden` );
    else {
        let neueKarte: string = "";
        for (let i: number = 0; i < _handkarten; i++) {
            let zufall: number = Math.floor((Math.random() * ziehStapel.length) );
            console.log(ziehStapel[zufall]);
            handKarten.push(ziehStapel[zufall]);
            ziehStapel.splice(zufall, 1);
            neueKarte += `<div class="${handKarten[i].farbe}"> ${handKarten[i].farbe} ${handKarten[i].wert} </div> `;
        }
        console.log(neueKarte);
        document.getElementById("Handkarten").innerHTML = neueKarte;
    }
}

kartenAusgeben(kartenZiehen());
}