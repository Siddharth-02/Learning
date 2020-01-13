function callAPI(Uid){

    console.log(typeof(Uid.value));

    var request = new XMLHttpRequest();

    var link = "https://api.github.com/users/";

    request.open("GET",link+Uid.value,/* async */ false);
    request.send();

    var response = request.responseText;
    
    console.log(response);
    console.log("response head" + request.responseText.toString());

    var obj = JSON.parse(request.responseText);
    console.log("Parsed Obj" + obj);
}