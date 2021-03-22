function sendMessage(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    //alert("Thank you, " + name + ", we will email you at " + email + " shortly.");
    document.getElementById("confirmation").innerHTML = "Thank you, " + name + ", we will email you at " + email + " shortly.";
}


function numberCalculation(){
    var numberOne = 28;
    var numberTwo = 78;

    var addTwoNumbers = numberOne + numberTwo;

    if(addTwoNumbers < 100){
        alert("I wish it was a bigger number");
    }else{
        alert("Wow that's a big number");
    }
}

numberCalculation();