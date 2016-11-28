//PUT IN THINGS FOR WHEN THE USER PUTS IN BAD Input
//MAYBE PUT IN A RESET BUTTON
//NEED CSS
//default sizes: 8, 16, 32, 64
//u: 2^8 -1 , 2^16 -1
//t pos: 2^7 -1
//t neg: -2^7
//o neg: -2^7 + 1
var size = 8;
function S() {
    document.getElementById("para1").innerHTML = "";
    var e = document.getElementsByName("select")[0].value;
    if (e === "blank") {
        document.getElementById("choice").style.display = "none";
    }
    else {
        //binary to decimal
        document.getElementById("choice").style.display = "block";
        document.getElementById("choice").style.display = "block";
    }
}
function addIn(x) {
    str = x + 'in';
    if (document.getElementById(x + 'Check').checked == true) {
        document.getElementById(str).style.display = "block";
        document.getElementById("convert").style.display = "block";
    }
    else {
        document.getElementById(str).style.display = "none";
        if (document.getElementById("oneCheck").checked == false
            && document.getElementById("twoCheck").checked == false
            && document.getElementById("unsignCheck").checked == false) {
            document.getElementById("convert").style.display = "none";
        }
    }
}


function BinarytoDecimal(input) {
    if (input === "") {
        return "";
    }
    var num = 0;
    var scale = 1;
    for (var i = input.length - 1; !(i < 0) ; i--) {
        var current = input.charAt(i);
        if (current == '1') {
            num += scale;
        }
        scale *= 2;
    }
    return num;
}


function TwoComplementtoDecimal(input) {
    var str = input.slice(1, input.length);
    console.log(str);
    console.log(typeof (str));
    var num = BinarytoDecimal(str);
    console.log(num);
    var ch = input.charAt(0);
    if (ch === '1') {
        num = num - (Math.pow(2, input.length - 1));
    }
    return num;
}


function OneComplementtoDecimal(input) {
    if (input.charAt(0) == '0') {
        return BinarytoDecimal(input);
        //negative
    } else if (input.charAt(0) == '1') {
        var stringOutput = "";
        var isZero = true;
        //Flip the binary number
        for (var i = 0; i < input.length; i++) {
            var currentChar = input.charAt(i);
            if (currentChar == '1') {
                stringOutput = stringOutput.concat("0");
            } else if (currentChar == '0') {
                stringOutput = stringOutput.concat("1");
            }
        }
        //Is the value zero?
        for (var i = 0; i < stringOutput.length; i++) {
            var currChar = stringOutput.charAt(i);
            if (currChar == '1') {
                isZero = false;
            }
        }
        if (isZero) {
            return "-0";
        } else {
            var strResult = "-";
            strResult = strResult.concat(BinarytoDecimal(stringOutput))
            return strResult;
        }
    }
    return 0;
}

//characters should only be digits 0 - 9 Ascii: 48 - 57 or it can be '-' or '+'
function DecimalInput(input) {
    var i;
    for (i = 0; i < input.length; i++) {
        if (!((input.charCodeAt(i) > 47 && input.charCodeAt(i) < 58)) ||
               input.charAt(i) == '+' || input.charAt(i) == '-') {
            //bad input
            return -1;
        }
    }
    //good input
    return 1;
}


function DecimalToBinary(input) {
    if (input === "+0" || input === "-0") {
        return "00000000";
    }
    input = Number(input);
    if (input < 0) {
        return ("negative numbers cannot be represented in unsigned");
    }
    result = "";
    var mod = 0;
    //count the number of iterations the while loop
    var j = 0;
    var charArr = new Array();
    while (input > 0) {
        mod = input % 2;
        charArr.push(String(mod));
        input = Math.floor(input / 2);
        j++;
    }
    var i;
    //prepend with 0s for default size
    for (j; j < size; j++) {
        result += '0';
    }
    for (i = charArr.length - 1; i >= 0; i--) {
        result += charArr[i];
    }
    return result;
}


function DecimalToOneComplement(input) {
    var result = "";
    //if number of bits are unclear, default to
    //byte size
    if (input === "+0") {
        return ("00000000");
    }
    if (input === "-0") {
        return ("11111111");
    }
    if (input > 0) {
        result += DecimalToBinary(input);
        return result;
    }
    var str = DecimalToBinary(-input);
    var i;
    for (i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) === '0') {
            result += '1';
        }
        if (str.charAt(i) === '1') {
            result += '0';
        }
    }
    return result;
}


function DecimalToTwosComplement(input) {
    if (input === "+0" || input === "-0") {
        return ("00000000");
    }
    var str = DecimalToOneComplement(input);
    if (input == 0) {
        return '0';
    }
    var result = "";
    var i;
    for (i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) === '0') {
            break;
        }
    }
    //if the for loop goes through the whole
    //string and doesn't come up with anything
    if (i == -1) {
        result += '1';
        var j;
        for (j = 0; j < str.length - 1; j++) {
            result += '0';
        }
        return result;
    }
    var j;
    for (j = 0; j < i; j++) {
        result += str.charAt(j);
    }
    result += '1';
    for (j = i + 1; j < str.length - 1; j++) {
        result += '0';
    }
    return result;
}
//default sizes: 8, 16, 32, 64
//u: 2^8 -1 , 2^16 -1
//t pos: 2^7 -1
//t neg: -2^7
//o neg: -2^7 + 1
//o pos: 2^7 -1
function defaultSize(input) {

    // how many bits possible
    var arrNum = [8, 16, 32, 64];
    input = Number(input);

    // default value
    size = 8;
    if (input == 0) {
        return;
    }

    // index into array
    var i = 0;

    // "largest" neg or largest pos





    //error handling if number takes over 64 bits? none so far
    if (input < 0) {
        // if we have one's complement, we have to have it work for that many bits
        if (document.getElementById("oneCheck").checked == true) {
            while (true) {
                if (input >= -Math.pow(2, arrNum[i] - 1) + 1) {
                    break;
                }
                i++;
            }
            size = arrNum[i];
            return;
        }
        else {

            //two's complement
            while (true) {
                if (input >= -Math.pow(2, arrNum[i] - 1)) {
                    break;
                }
                i++;
            }
            size = arrNum[i];
            return;
        }
    }

    else {
        // if it is positive and two or one are checked we have to make it work
        // for those two
        if (document.getElementById("twoCheck").checked == true ||
            document.getElementById("oneCheck").checked == true) {

            while (true) {
                if (input <= Math.pow(2, arrNum[i] - 1)) {
                    break;
                }
                i++;
            }
            size = arrNum[i];

            return;

        }
        else {
            while (true) {
                if (input <= Math.pow(2, arrNum[i]) - 1) {
                    break;
                }
                i++;
            }
            size = arrNum[i];
            return;
        }
    }
}

//Binary input must only be 0 or 1. Ascii: 48 or 49
function BinaryInput(input) {
    var i;
    for (i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) != 48 && input.charCodeAt(i) != 49) {
            //bad input
            return -1;
        }
    }
    //good input
    return 1;
}


function BinaryConversion() {
    var input = document.getElementById("input").value;

    //binary to decimal
    if (document.getElementsByName("select")[0].value === "Binary") {
        if (BinaryInput(input) < 0) {
            document.getElementById("para1").innerHTML = "Invalid input: \nInput can only consist of 0 and 1.";
            return;
        }
        else {
            document.getElementById("para1").innerHTML = "";
        }
        if (document.getElementById("oneCheck").checked == true) {
            document.getElementById("one").value = OneComplementtoDecimal(input);
        }
        if (document.getElementById("twoCheck").checked == true) {
            document.getElementById("two").value = TwoComplementtoDecimal(input);
        }
        if (document.getElementById("unsignCheck").checked == true) {
            document.getElementById("unsign").value = BinarytoDecimal(input);
        }
        return;
    }
    else if (document.getElementsByName("select")[0].value === "Decimal") {
        if (DecimalInput(input) < 0) {
            document.getElementById("para1").innerHTML = "Invalid input: \nInput must consist of only digits.";
            return;
        }
        else {
            document.getElementById("para1").innerHTML = "";
        }
        defaultSize(input);
        if (document.getElementById("oneCheck").checked == true) {
            document.getElementById("one").value = DecimalToOneComplement(input);
        }
        if (document.getElementById("twoCheck").checked == true) {
            document.getElementById("two").value = DecimalToTwosComplement(input);
        }
        if (document.getElementById("unsignCheck").checked == true) {
            document.getElementById("unsign").value = DecimalToBinary(input);
        }
        return;
    }
    else {
        return;
    }
}