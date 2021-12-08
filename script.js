var dom = document;
function maxnumberp1() {
    var num1p1 = 5;
    var num2p1 = 10;

    var result = dom.getElementById("outputp1");

    if (num1p1 > num2p1) {

        console.log("Maximun number is : ", num1p1);
        outputp1.innerHTML = num1p1;
    }
    else {
        console.log("Maximun number is :", num2p1);
        outputp1.innerHTML = num2p1;
    }
}

function maxnumberp2() {
    // var dom = document;
    var num1p2 = 10;
    var num2p2 = 11;
    var num3p2 = 13;
    var resultp2 = dom.getElementById("outputp2");

    if (num1p2 > num2p2 && num1p2 > num3p2) {

        console.log("MAximun number is ", num1p2);
        outputp2.innerHTML = num1p2;
    } 
    if (num2p2 > num1p2 && num2p2 > num3p2) {

        console.log("MAximun number is ", num2p2);
        outputp2.innerHTML = num2p2;

    }
    if(num3p2 > num1p2 && num3p2 > num2p2){
        console.log("MAximun number is ", num3p2);
        outputp2.innerHTML = num3p2;

    }
}

function numIsPosNegZero() {

    var num1p3 = parseInt(prompt("Enter a number :"));
    var resultp3 = dom.getElementById("outputp3");
    if (num1p3>0) {
         
        console.log("User enter a Positive number : ",num1p3);
        outputp3.innerHTML = num1p3;
    }   
    else if( num1p3<0){
        console.log("User enter a Negative number : ",num1p3);
        outputp3.innerHTML = num1p3;
    }
     
    else if(num1p3==0){
        console.log("User enter a zero number : ",num1p3);
        outputp3.innerHTML = num1p3;
    }
}

function numIsDivByFiveAndEleOrNot() {
    var num1p4 = parseInt(prompt("Enter a number :"));
    var resultp4 = dom.getElementById("outputp4");
    if (num1p4%5==0 && num1p4%11==0) {
        console.log(" Number is divisible by 5 and 11" ,num1p4);
        outputp4.innerHTML=num1p4;
    }
    else{

        console.log("Number is not  divisible by 5 and 11 " ,num1p4);
        outputp4.innerHTML=num1p4;
    }
}
function numIsEvenOrNot() {
    var num1p5 = parseInt(prompt("Enter a number :"));
    var resultp5 = dom.getElementById("outputp5");
    if (num1p5 % 2 ==0) {
        console.log(" Number is Even" ,num1p5);
        outputp5.innerHTML=num1p5;
    }
    else{

        console.log("Number is Odd " ,num1p5);
        outputp5.innerHTML=num1p5;
    }
    
}
 
function yearIsLeafOrNot() {
    var num1p6 = parseInt(prompt("Enter a year :"));
    var resultp6 = dom.getElementById("outputp6");
    if (num1p6 % 4 ==0) {
        console.log(" User Enter a leaf Year : " ,num1p6);
        outputp6.innerHTML=num1p6;
    }
    else{

        console.log("Enter year are not leaf year" ,num1p6);
        outputp6.innerHTML=num1p6;
    }
    
}