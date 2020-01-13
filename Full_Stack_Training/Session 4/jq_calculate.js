
$(document).ready(function(){

    
    var num1, num2,operator,res;

    $("input:button").click(function () {

    var text = $(this).val();

    if($.isNumeric(text) && num1 == null){
    num1 = text;
    console.log(num1);

    $(".result").text(num1);

    }else if($.isNumeric(text) && num1 !== null){

    num2 = text;
    console.log(num2);
    res = operate(num1,num2,text);
    console.log(res);

    $(".result").text(num1 + operator + num2);
    
    }else{
       operator = text;
       console.log(operator);

        $(".result").text(num1 + operator);
    }
    });

    $

   
    });

    function operate(num1,num2,text){
        switch(text){
            case '+': return( parse.float(num1) + parse.float(num2));
                break;
            case '-': return( parse.float(num1) - parse.float(num2));
                break;
            case '/': return( parse.float(num1) / parse.float(num2));
                break;
            case '*': return( parse.float(num1) * parse.float(num2));
                break;
        }
    }