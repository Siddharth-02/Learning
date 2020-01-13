var i = 0;

    function timecount(){
        i = i+1;
        postMessage("Current Value is " + i); //post message generally one call - 
        setTimeout("timecount()",500);
    }

timecount();

