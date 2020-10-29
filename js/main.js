
$(document).ready( function(){

    //GENERAZIONE NUMERI CASUALI
    var arrayNumeri = [];
    nNumeri = 5;

    var numeriUtenteCorretti = [];
    var counter = [];


    while (arrayNumeri.length < nNumeri){

        nuoviNumeri = Math.floor( Math.random() * (100 - 1 + 1) ) +1;
      
        if (arrayNumeri.includes(nuoviNumeri) === false ){
            arrayNumeri.push(nuoviNumeri);
        }
    }
    alert(arrayNumeri);
    console.log(arrayNumeri);

    //TIMEOUT  PROMPT E LETTURA
    var time = 1; 
    time *= 1000;

    setTimeout( function (){
        for (var i = 0; i <= 4; i++){
            
            var numeriUtente = parseInt( prompt('inserire i numeri'));
            
            if(arrayNumeri.includes(numeriUtente) === true){

                counter++;

                numeriUtenteCorretti.push(numeriUtente);

                document.getElementById('numeri').innerHTML = 'hai indovinato ' + counter + ' ' + 'numeri: ' + numeriUtenteCorretti;
            }
        }  
    }, time);
    console.log(time);
    console.log(numeriUtenteCorretti);

});//--- end document