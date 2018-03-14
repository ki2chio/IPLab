isInteger(+prompt("Input begin",""))?alert("false"):alert("true");
findPrimes(+prompt("input start namber for search",""),+prompt("input end namber for search",""));
function isInteger(inputNumber) {
    if(inputNumber%1){
        return true;
    }else{
        return false;
    }
}
function findPrimes(beginSearch, endSearch) {
    for(var i=beginSearch;i<=endSearch;i++){
        for(var divider=0,counter=0;counter<=2&&divider<=i;divider++){
            if(i%divider==0) {
                counter++;
            }
        }
        if(counter!=3)console.log(i);
    }
}
