'use strict';

module.exports=class Tietokonerekisteri{
    constructor(tietokonerekisteri){
        this.tietokonerekisteri=tietokonerekisteri;
    }

    haeTietokone(numero) {
        if(!numero) throw new Error('parametri puuttuu');
            
        for(let kone of this.tietokonerekisteri){
            if(kone.numero===numero){
                return kone;
            }
        }
        throw new Error('numerolla ei löydy konetta');
    }

    haeKoneetValmistajalla(valmistaja) {
        if(!valmistaja) return [];
        let tulos=[];
        for(let kone of this.tietokonerekisteri){
            if(kone.valmistaja.toLowerCase()===valmistaja.toLowerCase()){
                tulos.push(kone.numero);
            }
        }
        return tulos;
    }

    haeKoneetTyypilla(tyyppi) {
        if(!tyyppi) throw new Error('parametri puuttuu');

        let tulos=[];
        for(let kone of this.tietokonerekisteri){
            if(kone.tyyppi.toLowerCase()===tyyppi.toLowerCase()){
                tulos.push(kone);
            }
        }
        return tulos;
    }

    haeKoneenVarusteet(numero) {
        if(!numero) return [];
        let tulos=[];
        for(let kone of this.tietokonerekisteri){
            if(kone.numero===numero){
                return kone.varusteet;  
            }
        }
        throw new Error('numerolla ei löydy konetta');
    }

    onkoKoneellaOhjelmia(numero) {
        for(let kone of this.tietokonerekisteri){
            if(kone.numero===numero){
                if(kone.ohjelmat.length>0){
                return true;  
            }
        }
    }
    return false;
    }

    onkoKoneellaVarusteita(numero) {
        for(let kone of this.tietokonerekisteri){
            if(kone.numero===numero){
                if(kone.varusteet.length>0){
                return true;  
            }
        }
    }
    return false;
    }

    haeKoneenHinta(numero) {
        for(let kone of this.tietokonerekisteri){
            if(kone.numero===numero){
                return kone.hinta;  
            }
        }
    throw new Error('numerolla ei löydy konetta');
    }

    haeKoneenHintaOhjelmineen(numero) {
        let kokonaishinta = 0;
        for(let kone of this.tietokonerekisteri){
            if(kone.numero===numero){
                kokonaishinta += kone.hinta;  
                for(let tieto of kone.ohjelmat){
                    kokonaishinta += tieto["hinta€"];
                }
                return kokonaishinta;
            }       
        }
    throw new Error('numerolla ei löydy konetta');
    }

}