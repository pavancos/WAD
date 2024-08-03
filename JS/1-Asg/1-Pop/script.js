function showDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date").innerHTML = today;
}

function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}

function factorial() {
    let n = prompt("Enter a number to find factorial:")
    alert("Factorial of " + n + " is " + fact(n));
}


function showTable() {
    let n = prompt("Enter a number")
    alert("Table of " + n + " is:"
        + "\n" + n + " x 1 = " + n * 1 + "\n" 
        + n + " x 2 = " + n * 2 + "\n"
        + n + " x 3 = " + n * 3 + "\n" 
        + n + " x 4 = " + n * 4 + "\n" 
        + n + " x 5 = " + n * 5 + "\n" 
        + n + " x 6 = " + n * 6 + "\n" 
        + n + " x 7 = " + n * 7 + "\n" 
        + n + " x 8 = " + n * 8 + "\n" 
        + n + " x 9 = " + n * 9 + "\n" 
        + n + " x 10 = " + n * 10
    )
}

function sumOfN(){
    let sum=0;
    let ele=true;
    for(;ele;ele=confirm("Do you want to add more numbers" )){
        let n = prompt("Enter the number:")
        sum+=parseInt(n);
    }
    alert("Sum of all numbers is: "+sum);
}