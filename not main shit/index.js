function printEmail(){

    var emailoutput = document.getElementById("emailAddress").value;
    console.log("print email -", emailoutput);
    window.alert('print email -'+ emailoutput);

}

function gotoNextPg(){
    var emailoutput = document.getElementById("emailAddress").value;
    window.location.href = "/second.html?email=" + emailoutput;

}


 function gobtosec(){
    location.href= "/second.html";
}