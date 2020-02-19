# Testing-Jest  

## **Javascipt testaus**
- tarkoituksena tehdä kattavat testit API:ssa ennalta määriteltyjen ohjelman toimintojen perusteella  
- suunnitellut testitapaukset on kirjattu esimerkkeinä API:in
- testitapaukset => testit => toteutetaan toiminnot (funktiot) => ajetaan testit

### Asentaminen  
- testi.js sijaitsee oletuskansiossa, josta jest etsii testejä
- terminaalissa `'npm init -y'`  
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
