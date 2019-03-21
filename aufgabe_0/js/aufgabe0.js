function namenseingabe() {
    var anrede = prompt("Ich würde Sie gern persönlich ansprechen.", "Bitte Ihren Namen eingeben.");
    namensausgabe(anrede);
}
function namensausgabe(anrede) {
    document.getElementById("Ausgabe").innerHTML = "Hallo " + anrede + ", es freut mich, dass du diese Seite besuchst. :D";
    console.log("Hallo " + anrede + ".");
}
//onload = namenseingabe(); geht nicht :/
//# sourceMappingURL=aufgabe0.js.map