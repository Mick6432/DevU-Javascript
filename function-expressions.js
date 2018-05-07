setTimeout(function(){
    console.log('I waited 5 seconds.');
}, 5000);

let counter = 0;
/*
    function timeout(){
        while(counter <= 5){
            setTimeout(function(){
                console.log('Hello ' + counter++);
                timeout()
            }, 5000);
        } 
    }

*/
//timeout();
// ctrl c to kick out of infinite loop


// Immediately Invoked Function Expression. Commonly referred to as IIFE.
(function(){
    console.log('Immediately Invoked Function Expression (IIFE)');
})();