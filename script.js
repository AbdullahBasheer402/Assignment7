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
    if (num3p2 > num1p2 && num3p2 > num2p2) {
        console.log("MAximun number is ", num3p2);
        outputp2.innerHTML = num3p2;

    }
}

function numIsPosNegZero() {

    var num1p3 = parseInt(prompt("Enter a number :"));
    var resultp3 = dom.getElementById("outputp3");
    if (num1p3 > 0) {

        console.log("User enter a Positive number : ", num1p3);
        outputp3.innerHTML = num1p3;
    }
    else if (num1p3 < 0) {
        console.log("User enter a Negative number : ", num1p3);
        outputp3.innerHTML = num1p3;
    }

    else if (num1p3 == 0) {
        console.log("User enter a zero number : ", num1p3);
        outputp3.innerHTML = num1p3;
    }
}

function numIsDivByFiveAndEleOrNot() {
    var num1p4 = parseInt(prompt("Enter a number :"));
    var resultp4 = dom.getElementById("outputp4");
    if (num1p4 % 5 == 0 && num1p4 % 11 == 0) {
        console.log(" Number is divisible by 5 and 11", num1p4);
        outputp4.innerHTML = num1p4;
    }
    else {

        console.log("Number is not  divisible by 5 and 11 ", num1p4);
        outputp4.innerHTML = num1p4;
    }
}
function numIsEvenOrNot() {
    var num1p5 = parseInt(prompt("Enter a number :"));
    var resultp5 = dom.getElementById("outputp5");
    if (num1p5 % 2 == 0) {
        console.log(" Number is Even", num1p5);
        outputp5.innerHTML = num1p5;
    }
    else {

        console.log("Number is Odd ", num1p5);
        outputp5.innerHTML = num1p5;
    }

}

function yearIsLeafOrNot() {
    var num1p6 = parseInt(prompt("Enter a year :"));
    var resultp6 = dom.getElementById("outputp6");
    if (num1p6 % 4 == 0) {
        console.log(" User Enter a leaf Year : ", num1p6);
        outputp6.innerHTML = num1p6;
    }
    else {

        console.log("Enter year are not leaf year", num1p6);
        outputp6.innerHTML = num1p6;
    }

}
function numIsAlpOrNot() {

    var num1p7 = prompt("Enter a character or :");
    var resultp7 = dom.getElementById("outputp7");
    if (num1p7 >= "a" && num1p7 <= "z" || num1p7 >= "A" && num1p7 <= "Z") {
        console.log("User enter that alphabet : ", num1p7);
        outputp7.innerHTML = num1p7;
    }
    else {
        console.log("User enter not alphabet : ", num1p7);
        outputp7.innerHTML = num1p7;
    }

}
function numIsVowOrCon() {

    var num1p8 = prompt("Enter a character or :");
    var resultp8 = dom.getElementById("outputp8");
    if (num1p8 == 'a' || num1p8 == 'A' || num1p8 == 'e' || num1p8 == 'E' || num1p8 == 'i' || num1p8 == 'I' || num1p8 == 'o' || num1p8 == 'O' || num1p8 == 'u' || num1p8 == 'U' ) {
        console.log("User enter that Volwo : ", num1p8);
        outputp8.innerHTML = num1p8;
    }
    else {
        console.log("User enter Contant : ", num1p8);
        outputp8.innerHTML = num1p8;
    }
}
 function numIsAlpOrDigOrSpeChar() {
    var num1p9 = prompt("Enter a character or :");
    var resultp9 = dom.getElementById("outputp9");
    if (num1p9 >= "a" && num1p9 <= "z" || num1p9 >= "A" && num1p9 <= "Z") {
        console.log("User enter a alphabet : ", num1p9);
        outputp9.innerHTML = num1p9;
    }

    else if(num1p9 >= '0' && num1p9 <= '9'){
        console.log("User enter a Digit : ", num1p9);
        outputp9.innerHTML = num1p9;

    }

    else {
        console.log("User enter a Special Character : ", num1p9);
        outputp9.innerHTML = num1p9;
    }

 }
 function CharIsUppOrLowAlp() {

       var num1p10 = prompt("Enter a character or :");
    var resultp10 = dom.getElementById("outputp10");
    if (num1p10 >= "a" && num1p10 <= "z" ) {
        console.log("User enter a Lower CAse Character : ", num1p10);
        outputp10.innerHTML = num1p10;
        }
        else if(num1p10 >= "A" && num1p10 <= "Z"){
            console.log("User enter a Upper CAse Character : ", num1p10);
        outputp10.innerHTML = num1p10;
        }
        else{
            console.log("User ENter else thing :" ,num1p10);
            outputp10.innerHTML = num1p10;
        }    
 }