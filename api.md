## Ohjelmassa tarvittavat toiminnot

- **haetaan tietokone numerolla**
    - parametrina annetaan tietokoneen numero
    - palauttaa numeroa vastaavan tietokoneolion
    - jos numerolla ei ole tietokonetta, aiheuttaa poikkeuksen `'numerolla ei löydy konetta'`
    - jos parametri puuttuu, aiheuttaa poikkeuksen `'parametri puuttuu'`

### Esimerkki
```js
haeTietokone(1);
```
palauttaa
```json
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
```
ja
```js
haeKone(111);
```
palauttaa poikkeuksen`'numerolla ei löydy konetta'`

ja
```js
haeKone();
```
palauttaa poikkeuksen`'parametri puuttuu'`

- **haetaan tietokone valmistajan nimellä**
    - parametrina annetaan tietokoneen valmistaja
    - palauttaa taulukon, jossa on löytyneiden tietokoneiden numerot
    - jos valmistajalla ei ole tietokonetta, palauttaa tyhjän taulukon
    - jos parametri puuttuu, palauttaa tyhjän taulukon
    Huom! Isot ja pienet kirjaimet tulkitaan samoiksi kirjaimiksi. Siis BMIX = Bmix.

### Esimerkki
```js
haeKoneetValmistajalla('CERA');
```
palauttaa
```json
[2]
```

ja
```js
haeKoneetValmistajalla('BMIX');
```
palauttaa
```json
[1,3]
```

vastaavasti
```js
haeKoneetValmistajalla('Bmix');
```
palauttaa
```json
[1,3]
```

ja
```js
haeKoneetValmistajalla('Dell');
```
palauttaa
```json
[]
```

ja
```js
haeKoneetValmistajalla();
```
palauttaa
```json
[]
```

- **haetaan kaikki annetun tyypin mukaiset tietokoneet**
    - parametrina annetaan tyyppi
    - palauttaa taulukon koneolioita. Palauttaa tyhjän taulukon, jos mitään ei löydy
    - aiheuttaa poikkeuksen `'parametri puuttuu'`, jos parametria ei anneta
    Huom! Isot ja pienet kirjaimet tulkitaan samoiksi kirjaimiksi. Siis minitorni = Minitorni.

### Esimerkki
```js
haeKoneetTyypilla('minitorni');
```
palauttaa
```json
[
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
]
```
vastaavasti
```js
haeKoneetTyypilla('Minitorni');
```
palauttaa
```json
[
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
]
```

ja
```js
haeKoneetTyypilla('läppäri');
```
palauttaa
```json
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
]
```

```js
haeKoneetTyypilla();
```
palauttaa poikkeuksen`'parametri puuttuu'`

- **haetaan tietokoneen varusteet**
    - parametrina annetaan tietokoneen numero
    - palauttaa tietokoneen varusteet taulukkona. Palauttaa tyhjän taulukon, jos varusteita ei ole. 
    - jos parametri puuttuu, palauttaa tyhjän taulukon
    - jos numerolla ei ole tietokonetta, aiheuttaa poikkeuksen`'numerolla ei löydy konetta'`

### Esimerkki
```js
haeKoneenVarusteet(1);
```
palauttaa
```json
["näppis","näyttö","hiiri"]
```

ja
```js
haeKoneenVarusteet(3);
```
palauttaa
```json
[]
```

vastaavasti
```js
haeKoneenVarusteet();
```
palauttaa
```json
[]
```

ja
```js
haeKoneenVarusteet(111);
```
palauttaa poikkeuksen`'numerolla ei löydy konetta'`

- **palauttaa tiedon onko tietokoneella ohjelmia**
    - parametrina annetaan tietokoneen numero
    - palauttaa true, jos tietokoneella on ohjelmia ja muuten false
    - jos numerolla ei ole tietokonetta tai haetaan ilman parametria, palauttaa false

### Esimerkki
```js
onkoKoneellaOhjelmia(1);
```
palauttaa
```json
{true}
```

ja
```js
onkoKoneellaOhjelmia(111);
```
palauttaa
```json
{false}
```

vastaavasti
```js
onkoKoneellaOhjelmia();
```
palauttaa
```json
{false}
```

- **palauttaa tiedon onko tietokoneella varusteita**  
  - parametrina annetaan tietokoneen numero
  - palauttaa true, jos tietokoneella on varusteita ja muuten false
  - jos numerolla ei ole tietokonetta tai haetaan ilman parametria, palauttaa false

### Esimerkki
```js
onkoKoneellaVarusteita(1);
```
palauttaa
```json
{true}
```

vastaavasti
```js
onkoKoneellaVarusteita(3);
```
palauttaa
```json
{false}
```

ja
```js
onkoKoneellaVarusteita(111);
```
palauttaa
```json
{false}
```

ja
```js
onkoKoneellaVarusteita();
```
palauttaa
```json
{false}
```

- **palauttaa tietokoneen hinnan ilman ohjelmia**
    - parametrina annetaan tietokoneen numero
    - palauttaa hinnan euroina
    - jos numerolla ei ole tietokonetta tai parametri puuttuu, aiheuttaa poikkeuksen `'numerolla ei löydy konetta'`

### Esimerkki
```js
haeKoneenHinta(1);
```
palauttaa
```json
{250}
```
ja
```js
haeKoneenHinta(111);
```
palauttaa poikkeuksen`'numerolla ei löydy konetta'`

vastaavasti
```js
haeKoneenHinta();
```
palauttaa poikkeuksen`'numerolla ei löydy konetta'`

- **palauttaa tietokoneen hinnan ohjelmineen**
    - parametrina annetaan tietokoneen numero
    - palauttaa hinnan euroina
    - jos numerolla ei ole tietokonetta tai parametri puuttuu, aiheuttaa poikkeuksen `'numerolla ei löydy konetta'`

### Esimerkki
```js
haeKoneenHintaOhjelmineen(2);
```
palauttaa
```json
{380}
```
vastaavasti
```js
haeKoneenHintaOhjelmineen(1);
```
palauttaa
```json
{273}
```
ja
```js
haeKoneenHintaOhjelmineen(111);
```
palauttaa poikkeuksen`'numerolla ei löydy konetta'`

vastaavasti
```js
haeKoneenHintaOhjelmineen();
```
palauttaa poikkeuksen`'numerolla ei löydy konetta'`

## Tehtävä
- asenna jest kehitysriippuvuudeksi
- tee jestin testikansio
- täydennä api testiesimerkeillä
- tess testi.js
- tee kirjasto.js toteutusta varten (halutessa luokka)
- tee testit funktio kerrallaan eli:
    - tee testit (yksi describe, jossa kaikki failaavat)
    - toteuta funktio
    - testaa funktio
- viittaus ohjelmat["hinta€"] toimii, ohjelmat.hinta€ ei toimi

