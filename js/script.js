// example 01
function showText01(){
	document.getElementById('s_text01').innerHTML="Hello SSB-619";	
}

// example 02
function showText02(){
	document.getElementById('s_text02').innerHTML=Date();
}

// example 03
function bulbOn(){
	document.getElementById('img').src="images/bulbon.gif";
}
function bulbOff(){
	document.getElementById('img').src="images/bulboff.gif";
}	

// example 04
function bulbOn1(){
	document.getElementById('img1').src="images/bulbon.gif";
}
function bulbOff1(){
	document.getElementById('img1').src="images/bulboff.gif";
}
// example 05
function day(){
	document.getElementById('img2').src="images/day.jpg";
}
function night(){
	document.getElementById('img2').src="images/night.jpg";
}

// example 06
function styleChange(){
	document.getElementById('css').style.color="green";
}

// example 07
function fontSize(){
	document.getElementById('css2').style.fontSize="50px";
}

// example 08
function showContent(){
	document.getElementById('content').style.display="block";
}
function hideContent(){
	document.getElementById('content').style.display="none";
}

// example 09
function add(){
	let x, y, z;
    x = 5;
    y = 7;
    z = x + y;
	document.getElementById('addition').innerHTML="z = x + y =" + z;
}

// example 10
function multiply(){
	let x, y, z;
    x = 15;
    y = 13;
    z = x * y;
	document.getElementById('multi').innerHTML="z = x * y =" + z;
}

// example 11
function divide(){
	let x, y, z;
    x = 255;
    y = 15;
    z = x / y;
	document.getElementById('division').innerHTML="z = x / y =" + z;
}
// example 12


// example 13
function showText10(){
	document.getElementById('s_text10').innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";	
}

// example 14
function result(){
	var x, y;
	x = 5 + 6;
	y = x * 10;
    document.getElementById("var").innerHTML = y;
}

// example 15
function modulus(){
    let x, y, z;
    x = 16345;
    y = 79;
    z = x % y;
    document.getElementById('modu').innerHTML="z = x % y =" + z; 
}

// example 16
var data= "Welcome to SS";
function dataRepeat(){
    document.getElementById('rep').innerHTML= data.repeat(5); 
}

// example 17
let number1, number2, value1;

number3 = 10;
number4	= 3;

value1 = number3 < number4
function dataRes1(){
    document.getElementById('res1').innerHTML= value1; 
}

// example 18
var carName;
carName = "Volvo";

function car(){
    document.getElementById('carname').innerHTML= carName; 
}


// example 19
const cars = ["Saab", "Volvo", "BMW"];


cars[0] = "Toyota";

cars.push("Audi");
function car1(){
    document.getElementById('car').innerHTML= cars; 
}

// example 20
let number5, number6, value2;

number5 = 20;
number6	= 20;

value2 = number5 == number6
function dataRes2(){
    document.getElementById('res2').innerHTML= value2; 
}

// example 21
let number7, number8, value3;

number7 = 20;
number8	= 19;

value3 = number7 == number8
function dataRes3(){
    document.getElementById('res3').innerHTML= value3; 
}

// example 22
let a = 3;
let x = (100 + 50) * a;

function arithmetic(){
    document.getElementById("arith").innerHTML = x; 
}

// example 23
var x1 = 10;
    x1 += 5;

function arithmetic1(){
    document.getElementById("arith1").innerHTML = x1; 
}

// example 24

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
function concatenates(){
    document.getElementById("concat").innerHTML = text3;
}

// example 25
let x2 = 5;
x2--;
let z1 = x2;

function arithmetic2(){
    document.getElementById("arith2").innerHTML = z1;
}

// example 26
let x3 = 5;

function arithmetic3(){
	document.getElementById("arith3").innerHTML = x3 ** 2;
}

// example 27

function precedence(){
	document.getElementById("pre").innerHTML = 100 + 50 * 8;
}

// example 28
function precedence02(){
	document.getElementById("pre02").innerHTML = 100 * 50 - 8;
}

// example 29
function precedence03(){
	document.getElementById("pre03").innerHTML = 100 / 50 * 3;
}

// example 30
let x4 = 10;
x4 -= 5;
function arithmetic4(){
	document.getElementById("arith4").innerHTML = "Value of x is: " + x4;
}

// example 31
let x5 = 60;
x5 *= 5;
function arithmetic5(){
	document.getElementById("arith5").innerHTML = "Value of x is: " + x5;
}

// example 32
let x6 = 25;
x6 **= 5;
function arithmetic6(){
	document.getElementById("arith6").innerHTML = "Value of x is: " + x6;
}

// example 33
let x7 = 25;
x7 /= 5;
function arithmetic7(){
	document.getElementById("arith7").innerHTML = "Value of x is: " + x7;
}

// example 34
let x8 = 26;
x8 %= 5;
function arithmetic8(){
	document.getElementById("arith8").innerHTML = "Value of x is: " + x8;
}

// example 35
let x9 = -100;
x9 <<= 5;
function arithmetic9(){
	document.getElementById("arith9").innerHTML = "Value of x is: " + x9;
}

// example 36
let x10 = -100;
x10 >>= 5;
function arithmetic10(){
	document.getElementById("arith10").innerHTML = "Value of x is: " + x10;
}

// example 37
let x11 = -100;
x11 >>>= 5;
function arithmetic11(){
	document.getElementById("arith11").innerHTML = "Value of x is: " + x11;
}

// example 38
let x12 = 10;
x12 &= 5;
function arithmetic12(){
	document.getElementById("arith12").innerHTML = "Value of x is: " + x12;
}

// example 39
let x13 = 10;
x13 |= 5;
function arithmetic13(){
	document.getElementById("arith13").innerHTML = "Value of x is: " + x13;
}

// example 40
let x14 = 100;
x14 ^= 5;
function arithmetic14(){
	document.getElementById("arith14").innerHTML = "Value of x is: " + x14;
}

// example 41
let x15 = 10;
x15 &&= 5;
function arithmetic15(){
	document.getElementById("arith15").innerHTML = "Value of x is: " + x15;
}

// example 42
let x16 = 250;
x16 &&= 25;
function arithmetic16(){
	document.getElementById("arith16").innerHTML = "Value of x is: " + x16;
}

// example 43
let x17;
x17 ??= 5;
function arithmetic17(){
	document.getElementById("arith17").innerHTML = "Value of x is: " + x17;
}

// example 44
let x18;         // Now x is undefined
x18 = 5;         // Now x is a Number
x18 = "John";    // Now x is a String
function arithmetic18(){
	document.getElementById("arith18").innerHTML = "Value of x is: " + x18;
}

// example 45
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

function jqstring(){
	document.getElementById("string").innerHTML = carName1 + "<br>" + carName2;
}


// example 46
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

function jqstring01(){
	document.getElementById("string01").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}


// example 47
let x19 = 34.00;
let x20 = 34;
let x21 = 3.14;

function jqnumber(){
	document.getElementById("num").innerHTML = x19 + "<br>" + x20 + "<br>" + x21;
}

// example 48
let y11 = 123e5;
let z11 = 123e-5;

function jqnumber01(){
	document.getElementById("num01").innerHTML = y11 + "<br>" + z11;
}

// example 49
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
function jqobj(){
	document.getElementById("obj").innerHTML = person.firstName + " is " + person.age + " years old.";
}


// example 50
let car001 = "Volvo";
car001 = undefined;
function jqtype(){
	document.getElementById("type01").innerHTML = "<p>The value of car is " + car001 + "<p>The typeof car is " + typeof car001;
}





