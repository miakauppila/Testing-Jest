'use strict';

const Tietokonerekisteri=require('../kirjastoLuokka.js');
const tietokoneet=require('../tietokoneet.json');

//luodaan alussa uusi olio testejä varten
let tietokonerekisteri = new Tietokonerekisteri(tietokoneet);

//ensimmäinen describe testaa vain, että funktiot ovat olemassa (ei sinänsä pakollinen)
describe('Funktiot määritelty',()=>{
    test('haeTietokone määritelty',()=>{
        expect(tietokonerekisteri.haeTietokone).toBeDefined();
    });
    test('haeKoneetValmistajalla määritelty',()=>{
        expect(tietokonerekisteri.haeKoneetValmistajalla).toBeDefined();
    });
    test('haeKoneetTyypilla määritelty',()=>{
        expect(tietokonerekisteri.haeKoneetTyypilla).toBeDefined();
    });
    test('haeKoneenVarusteet määritelty',()=>{
        expect(tietokonerekisteri.haeKoneenVarusteet).toBeDefined();
    });
    test('onkoKoneellaOhjelmia määritelty',()=>{
        expect(tietokonerekisteri.onkoKoneellaOhjelmia).toBeDefined();
    });
    test('onkoKoneellaVarusteita määritelty',()=>{
        expect(tietokonerekisteri.onkoKoneellaVarusteita).toBeDefined();
    });
    test('haeKoneenHinta määritelty',()=>{
        expect(tietokonerekisteri.haeKoneenHinta).toBeDefined();
    });
    test('haeKoneenHintaOhjelmineen määritelty',()=>{
        expect(tietokonerekisteri.haeKoneenHintaOhjelmineen).toBeDefined();
    });
});

//tästä alkavat muut testit
describe('Testataan haeTietokone', ()=>{
    const kone1={       
        "numero":1,
        "valmistaja":"BMIX",
        "tyyppi":"minitorni",
        "varusteet":["näppis","näyttö","hiiri"],
        "hinta":250,
        "ohjelmat":[
            {"nimi":"Teksturi", "hinta€":123},
            {"nimi":"Pasianssi", "hinta€":10}
            ]
    };

    test('Jos parametri puuttuu, aiheuttaa poikkeuksen "numero puuttuu"', ()=>{
        expect(()=>tietokonerekisteri.haeTietokone()).toThrow('parametri puuttuu');
    });
    test('Tietokone löytyy rekisteristä', ()=>{
        expect(tietokonerekisteri.haeTietokone(1)).toEqual(kone1);
    });
    test('Tietokonetta ei löydy rekisteristä, poikkeus "numerolla ei löydy konetta"', ()=>{
        expect(()=>tietokonerekisteri.haeTietokone(111)).toThrow('numerolla ei löydy konetta');
    });
});

describe('Testataan haeKoneetValmistajalla', ()=>{
    test('Valmistajalla on yksi kone', ()=>{
        expect(tietokonerekisteri.haeKoneetValmistajalla('CERA')).toEqual([2]);
    });
    test('Valmistajalla on useita koneita', ()=>{
        expect(tietokonerekisteri.haeKoneetValmistajalla('BMIX')).toEqual([1,3]);
    });
    test('Valmistajalla pienin kirjaimin on koneita', ()=>{
        expect(tietokonerekisteri.haeKoneetValmistajalla('Bmix')).toEqual([1,3]);
    });
    test('Valmistajalla ei ole koneita, palauttaa tyhjän taulukon', ()=>{
        expect(tietokonerekisteri.haeKoneetValmistajalla('Dell')).toEqual([]);
    });
    test('Parametri puuttuu, palauttaa tyhjän taulukon', ()=>{
        expect(tietokonerekisteri.haeKoneetValmistajalla()).toEqual([]);
    });
});

describe('Testataan haeKoneetTyypilla', ()=>{
    const kone1=[
        {
            "numero":1,
            "valmistaja":"BMIX",
            "tyyppi":"minitorni",
            "varusteet":["näppis","näyttö","hiiri"],
            "hinta":250,
            "ohjelmat":[
                {"nimi":"Teksturi", "hinta€":123},
                {"nimi":"Pasianssi", "hinta€":10}
            ]
        }
    ];
    const koneet= 
    [
        {
            "numero":2,
            "valmistaja":"CERA",
            "tyyppi":"läppäri",
            "varusteet":["hiiri"],
            "hinta":350,
            "ohjelmat":[
                {"nimi":"Teksturi", "hinta€":10},
                {"nimi":"Laskuri", "hinta€":20}
            ]
        },
        {
            "numero":3,
            "valmistaja":"BMIX",
            "tyyppi":"läppäri",
            "varusteet":[],
            "hinta":150,
            "ohjelmat":[
                {"nimi":"Teksturi", "hinta€":123}
            ]
        }
    ];
    test('Tyypillä löytyy kone', ()=>{
        expect(tietokonerekisteri.haeKoneetTyypilla('minitorni')).toEqual(kone1);
    });
    test('Tyypillä (nimessä iso kirjain) löytyy kone', ()=>{
        expect(tietokonerekisteri.haeKoneetTyypilla('minitorni')).toEqual(kone1);
    });
    test('Tyypillä löytyy useita koneita', ()=>{
        expect(tietokonerekisteri.haeKoneetTyypilla('läppäri')).toEqual(koneet);
    });
    test('Tyypillä (nimi isoin kirjaimin) löytyy useita koneita', ()=>{
        expect(tietokonerekisteri.haeKoneetTyypilla('LÄPPÄRI')).toEqual(koneet);
    });
    test('Jos parametri puuttuu, aiheuttaa poikkeuksen "parametri puuttuu"', ()=>{
        expect(()=>tietokonerekisteri.haeKoneetTyypilla()).toThrow('parametri puuttuu');
    });

});

describe('Testataan haeKoneenVarusteet', ()=>{
    test('Koneella on varusteita', ()=>{
        expect(tietokonerekisteri.haeKoneenVarusteet(1)).toEqual(["näppis","näyttö","hiiri"]);
    });
    test('Koneella ei ole varusteita', ()=>{
        expect(tietokonerekisteri.haeKoneenVarusteet(3)).toEqual([]);
    });
    test('Parametri puuttuu, palauttaa tyhjän taulukon', ()=>{
        expect(tietokonerekisteri.haeKoneenVarusteet()).toEqual([]);
    });
    test('Tietokonetta ei löydy rekisteristä, poikkeus "numerolla ei löydy konetta"', ()=>{
        expect(()=>tietokonerekisteri.haeKoneenVarusteet(111)).toThrow('numerolla ei löydy konetta');
    });
});

describe('Testataan onkoKoneellaOhjelmia', ()=>{
    test('Tietokonetta ei löydy rekisteristä, palauttaa false', ()=>{
        expect(tietokonerekisteri.onkoKoneellaOhjelmia(111)).toEqual(false);
    });
    test('Koneella on ohjelmia', ()=>{
        expect(tietokonerekisteri.onkoKoneellaOhjelmia(1)).toEqual(true);
    });
    test('Parametri puuttuu, palauttaa false', ()=>{
        expect(tietokonerekisteri.onkoKoneellaOhjelmia()).toEqual(false);
    });
});

describe('Testataan onkoKoneellaVarusteita', ()=>{
    test('Tietokonetta ei löydy rekisteristä, palauttaa false', ()=>{
        expect(tietokonerekisteri.onkoKoneellaVarusteita(111)).toEqual(false);
    });
    test('Koneella on varusteita', ()=>{
        expect(tietokonerekisteri.onkoKoneellaVarusteita(1)).toEqual(true);
    });
    test('Koneella ei ole varusteita', ()=>{
        expect(tietokonerekisteri.onkoKoneellaVarusteita(3)).toEqual(false);
    });
    test('Parametri puuttuu, palauttaa false', ()=>{
        expect(tietokonerekisteri.onkoKoneellaVarusteita()).toEqual(false);
    });
});

describe('Testataan haeKoneenHinta', ()=>{
    test('Tietokonetta ei löydy rekisteristä, poikkeus "numerolla ei löydy konetta"', ()=>{
        expect(()=>tietokonerekisteri.haeKoneenHinta(111)).toThrow('numerolla ei löydy konetta');
    });
    test('Parametri puuttuu, poikkeus "numerolla ei löydy konetta"', ()=>{
        expect(()=>tietokonerekisteri.haeKoneenHinta()).toThrow('numerolla ei löydy konetta');
    });
    test('Palauttaa koneen hinnan oikein', ()=>{
        expect(tietokonerekisteri.haeKoneenHinta(1)).toEqual(250);
    });
});

describe('Testataan haeKoneenHintaOhjelmineen', ()=>{
    test('Tietokonetta ei löydy rekisteristä, poikkeus "numerolla ei löydy konetta"', ()=>{
        expect(()=>tietokonerekisteri.haeKoneenHintaOhjelmineen(111)).toThrow('numerolla ei löydy konetta');
    });
    test('Parametri puuttuu, poikkeus "numerolla ei löydy konetta"', ()=>{
        expect(()=>tietokonerekisteri.haeKoneenHintaOhjelmineen()).toThrow('numerolla ei löydy konetta');
    });
    test('Palauttaa koneen hinnan ohjelmineen oikein 1.testi', ()=>{
        expect(tietokonerekisteri.haeKoneenHintaOhjelmineen(2)).toEqual(380);
    });
    test('Palauttaa koneen hinnan ohjelmineen oikein 2. testi', ()=>{
        expect(tietokonerekisteri.haeKoneenHintaOhjelmineen(2)).toEqual(380);
    });
});




