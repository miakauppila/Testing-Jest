# Testing-Jest 
- tekijä: Mia Kauppila, joulukuu 2019

## **Javascipt testaus**
- ohjelma, jolla haetaan erilaisia tietoja tietokoneista  
- tarkoituksena tehdä kattavat testit API:ssa ennalta määriteltyjen ohjelman toimintojen perusteella  
- suunnitellut testitapaukset on kirjattu esimerkkeinä API:in
- testitapaukset => jestin testit => toimintojen toteutus (funktiot) => ajetaan testit

### Asentaminen  
- testi.js sijaitsee oletuskansiossa, josta jest etsii testejä
- terminaalissa `'npm init -y'`  ja `'npm install jest --save-dev'`
- lisää package.json tiedostoon seuraava:  
 ```json
"scripts": {
    "test": "jest"
  } 
``` 
tai halutessasi
```json  
 "scripts": {
    "test": "jest --watchAll"
  }
```
- käynnistä jest terminaalissa komennolla `'npm test'`
