function showDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date").innerHTML=today;
}

function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
}

function factorial(){
    let n = prompt("Enter a number to find factorial:")
    alert("Factorial of "+n+" is "+fact(n));
}