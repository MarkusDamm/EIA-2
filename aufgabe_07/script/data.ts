namespace A7 {
    export interface CooleDaten {
        coolerName: string;
        cooleMenge: number; //wird noch nicht genutzt, vll. in Preis umbenennen
    }
    
    export interface EisDaten {
        [key: string]: CooleDaten[];
    }

    export let alleDaten: EisDaten;
    
    alleDaten = {
        "Eissorten": [
            {coolerName: "Vanille", cooleMenge: 0},
            {coolerName: "Schokolade", cooleMenge: 0},
            {coolerName: "Erdbeere", cooleMenge: 0},
            {coolerName: "Kaugummi", cooleMenge: 0}
        ],
        "Zusätze": [
            {coolerName: "Honig", cooleMenge: 0},
            {coolerName: "Kirschen", cooleMenge: 0},
            {coolerName: "Sahne", cooleMenge: 0},
            {coolerName: "Smarties", cooleMenge: 0}
        ]
    };
}