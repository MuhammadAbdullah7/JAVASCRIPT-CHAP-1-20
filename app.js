// CHAPTER 1
// Task: 01
alert("\n Task: 01 \n\n Hello Users! Welcome to My Website...");


// Task: 02
alert("\n Task: 02 \n\n Error! Please enter a Valid password");


// Task: 03
alert("\n Task: 03 \n\n welcome to JS land... \n Happy Coding!");


// Task: 04
alert("\n Task: 04 \n Welcome to JS Land...");
alert("\n Task: 04 \n Happy Coding! \n\n prevent this message from creating additional dialogs");


// Task: 05
console.log("Hello... I can run JS through through my web browser's console");

// CHAPTER 2
// Task: 01
var username;

// Task: 02
var myName = "Muhammad Abdullah";
console.log(myName);

// Task: 03

// a)
var messaeg;
// b)
message = "Hello World";
// c)
alert("\nTask: 03 \n"+message);

// Task: 04
var name = "Muhammad Abdullah";
var age = "21 years old";
var job = "Student";

alert("\n Task:04 \n Students's Information" + "\n\n" + name + "\n" + age + "\n" + job);

// Task: 05
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert("\nTask: 05 \n\n" + pizza);

// Task: 06
var email = "abdullah@gmail.com";
alert("\nTask: 06 \nMy email address is " + email + ".");

// Task: 07
var book = "A smarter way to learn JavaScript";
alert("\nTask: 07 \nI'm trying to learn from the book " + book + ".");

// Task: 08
var i = "Yah! I can write HTML content through JavaScript";
document.write(i + "<br><br>");

// Task: 09
var design = "“▬▬▬▬▬▬▬▬▬%$^$%▬▬▬▬▬▬▬▬▬”";
alert(design);
document.write(design);

// CHAPTER 3
// Task: 01
var age = 18;
alert("\nTask: 01 \nI'm " + age + " years old");

// Task: 02
var N = 10;
alert("\nTask: 02 \nYou've visisted this site " + N + " times.");

// Task: 03
var birthYear = 2001;
document.write("Task: 03"+ "<br>" + "My birth year is " + birthYear + "<br>" + "Data type of declared variable is number" + "<br><br>");

// Task: 04
// a)
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = "5";

document.write("Task: 04"+ "<br>" + visitorName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store.");

// CHAPTER 4
// Task: 01
var age = 18;
alert("\nTask: 01 \nI'm " + age + " years old");

// Task: 02
var N = 10;
alert("\nTask: 02 \nYou've visisted this site " + N + " times.");

// Task: 03
var birthYear = 2001;
document.write("Task: 03"+ "<br>" + "My birth year is " + birthYear + "<br>" + "Data type of declared variable is number" + "<br><br>");

// Task: 04
// a)
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = "5";

document.write("Task: 04"+ "<br>" + visitorName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store.");

// CHAPTER 5
// // Task: 01 & 2
var num1 = +prompt("Enter Number"); //taking Input in integer
var num2 = +prompt("Enter Number"); //taking Input in integer

var add = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2

document.write("1) Sum of " + num1 + " and " + num2 + " is " + add + "<br>");
document.write("2) Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");   
document.write("3) Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>"); 
document.write("4) Division of " + num1 + " and " + num2 + " is " + divide + "<br>");   
document.write("5) Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br><br>");  

// Task: 03
var randomNumber;
document.write("Value after variable declaration is: " + randomNumber + "<br>");

randomNumber = 5;
document.write("Initial Value: " + randomNumber + "<br>");

var i = ++randomNumber;
document.write("Value after increment is: " + i + "<br>");

var addVariable = i + 7;
document.write("Value after addition is: " + addVariable + "<br>");

var variableDecrement = --addVariable;
document.write("Value after decrement is: " + variableDecrement + "<br>");

var remainder = variableDecrement % 3;
document.write("The remainder is: " + remainder + "<br><br><br>");

// Task: 04
var ticketPrice = 600;
var ticketQunatity = 5;
var totalCost = ticketPrice * ticketQunatity;
document.write("Total cost to buy " + ticketQunatity + " tickets to a movie is " + totalCost + "PKR. <br><br><br>");

// Task: 05
document.write("<h2>Table of 11</h2>");
document.write("11 x 1 = "+ 11*1 + "<br>");
document.write("11 x 1 = "+ 11*2 + "<br>");
document.write("11 x 1 = "+ 11*3 + "<br>");
document.write("11 x 1 = "+ 11*4 + "<br>");
document.write("11 x 1 = "+ 11*5 + "<br>");
document.write("11 x 1 = "+ 11*6 + "<br>");
document.write("11 x 1 = "+ 11*7 + "<br>");
document.write("11 x 1 = "+ 11*8 + "<br>");;
document.write("11 x 1 = "+ 11*9 + "<br>")
document.write("11 x 1 = "+ 11*10 + "<br>");

// Task: 06
document.write("<h1>The Temperature Converter</h1>");
var celcius = 25;
var celciusToFahrenheit = (celcius * (9 / 5) + 32);
document.write(celcius + "<sup>o</sup>C is " + celciusToFahrenheit + "<sup>o</sup>F <br>");

var fahrenheit = 70;
var fahrenheitToCelcius = (fahrenheit - 32) * (5 / 9);
document.write(celcius + "<sup>o</sup>F is " + fahrenheitToCelcius + "<sup>o</sup>C <br><br><br>");

// Task: 07
document.write("<h1>Shopping Cart</h1> <br>");
var priceItem1 = 650;
var priceItem2 = 100;
var order1 = 3;
var order2 = 7;
var shipCharge = 100;

document.write("Price of Item <b>1</b> is: " + priceItem1 + "<br>");
document.write("Quantity of item <b>1</b> is: " + order1 + "<br><br>");;
document.write("Price of Item <b>2</b> is: " + priceItem2 + "<br>");
document.write("Quantity of item <b>2</b> is: " + order2 + "<br><br>");
document.write("Shipping Charges: " + shipCharge + "<br><br>");

var totalcost = (priceItem1 * order1) + (priceItem2 * order2) + shipCharge;
document.write("Total Cost of your Order is: " + totalcost + "<br><br><br>");

// Task: 08
document.write("<h1>Marks Sheet</h1>");
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + " % <br><br><br>");

// Task: 09
document.write("<h1>currency in PKR</h1>");

var USdollars = 10;
var saudiRiyal = 25;

var conversion = (USdollars * 104.80) + (saudiRiyal * 28);
document.write("Total currency in PKR: " + conversion  + "<br><br><br>");

// Task: 10
document.write("<h2>Arithmetic calculation in Single Expression</h2>");
var number = 10;
document.write("Initial Value: " + number + "<br>");

var total = (((number + 5) * 10) / 2);

document.write("Total: " + total + "<br>");

// Task: 11
document.write("<h1>age Calculator</h1>");
var currentYear = 2020;
var birthYear = 2001;
var age = currentYear - birthYear;

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is: " + age + "<br><br><br>");

// Task: 12
document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var circumference = (2 * 3.142 * radius);
var area = (3.142 * radius ** 2);

document.write("Radius of a Circle is: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// Task: 13
document.write("<h1> The Lifetime Supply Calculator</h1>");
var favSnack = "Lays";
var age = 18;
var maxAge = 70;
var estdamt = 2;

var totalSnackInEstdLife = ((maxAge - age) * estdamt);

document.write("Favorite Snack: " + favSnack + "<br>");
document.write("Current Age: " + age + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of Snacks per day: " + estdamt + "<br><br>");
document.write("You will need " + totalSnackInEstdLife + " " + favSnack + " to last you until the ripe old age of " + maxAge);

// CHAPTER 6 AND 9
// Task: 01
var a = +prompt("Enter any Number: ");

document.write("<h3>RESULT: </h3>");
document.write("<h3> The value of 'a' is: "+  a + "<br> </h3>");
document.write("*************************** <br><br>");

var b = ++a;
document.write("The value of '++a' is: "+  b + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var c = a++;
document.write("The value of 'a++' is: "+  c + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var d = --a;
document.write("The value of '--a' is: "+  d + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var e = a--;
document.write("The value of 'a--' is: "+  d + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

// Task: 02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0   +  1  +  1
alert(result);

// Explain the output at each stage:

// --a;
// Decrement: --a = 2 - 1 = 1

// --a - --b;
// (--a = 1) - (--b = 0) --> 1 - 0 = 1

// --a - --b + ++b;
// (--a = 1) - (--b = 0) + (++b = 1) =  -->  1 - 0 + 1 = 2

// --a - --b + ++b + b--;
// (--a = 1) - (--b = 0) + (++b = 1) + (b-- = 1) =  -->  1 - 0 + 1 + 1 = 3

// Task: 03
var name = prompt("Enter your Name: ");
alert("\nHello " + name + "\nNice to meet you...");

// Task: 04
var tableNum = +prompt("Enter Number: ");

for(i = 1; i < 11; i++) {
    document.write(tableNum + " x " + i + " = " + tableNum * i + "<br><br>");
}

// Task: 05
document.write("<h1>Marks Sheet</h1>")
var subj1 = prompt("Enter Subject 01 Name: ");
var subj2 = prompt("Enter Subject 02 Name: ");
var subj3 = prompt("Enter Subject 03 Name: ");

var totalMarks = 300;

var obtMarks1 = +prompt("Enter Obtained Marks in Subject 01: ");
var obtMarks2 = +prompt("Enter Obtained Marks in Subject 02: ");
var obtMarks3 = +prompt("Enter Obtained Marks in Subject 03: ");

var subjTotalMarks = obtMarks1 + obtMarks2 + obtMarks3;
var percentage = ((subjTotalMarks / totalMarks) * 100);

document.write("Subject 01: " + subj1 + " (100 Marks)<br>");
document.write("Subject 02: " + subj2 + " (100 Marks)<br>");
document.write("Subject 03: " + subj3 + " (100 Marks)<br><br>");

document.write("Marks Obtained in 3 Subjects: " + subjTotalMarks + " / 300<br>");
document.write("Percentage: " + percentage);

// CHAP 10 11
// Task: 01
var city = prompt("Enter your City name: ");

if(city.toLowerCase() === "karachi") {
    alert("Welcome to the City of Lights. ");
}
else{
    alert("Welcome to " + city);
}

// Task: 02
var gender = prompt("Enter your gender: ");

if(gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if(gender.toLowerCase() === "female") {
    alert("Good Morning Madam.")
}
else{
    alert("Sorry, Wrong Input.!");
}

// Task: 03
var signalColor = prompt("Input the Color of Traffic Signal: ");

if(signalColor.toLowerCase() === "red") {
    alert("Must Stop.!");
}
else if(signalColor.toLowerCase() === "yellow") {
    alert("Ready to Move.");
}
else if(signalColor.toLowerCase() === "green") {
    alert("Move now...");
}
else {
    alert("Sorry.! Wrong Input...");
}

// Task: 04
var remainingFuel = +prompt("Enter remaining Fuel in your Car/Bike: ");

if(remainingFuel <= 0.25) {
    alert("Please refill the fuel in your Car/Bike");
}
else {
    alert("You don't need to refill the fuel in your Car/Bike");
}

// Task: 05
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
else {
    alert("given condition for variable b is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
else {
    alert("given condition for variable b is false");
}


var c = 12;  
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}


if (true){
    alert("True");
}
if (false){
    alert("False")
}

if("car" < "cat"){
    alert("car is smaller than cat");
}
    
// Task: 06
document.write("<h1>Marks Sheet</h1>");
var subj1 = +prompt("Enter Obtained Marks in Physics: ");
var subj2 = +prompt("Enter Obtained Marks in Mathematic: ");
var subj3 = +prompt("Enter Obtained Marks in English: ");
var obtainedMarks = subj1 + subj2 + subj3; 
var total = 300;
var percentage = ((obtainedMarks / total) * 100);


document.write("Total Marks: " + total + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + " % <br>");

if (percentage >= 80) {
    var grade = document.write("Grade: A-one <br>");
    var remarks = document.write("Remarks: Excellent <br>");
} 
else if (percentage >= 70) {
    var grade = document.write("Grade: A <br>");
    var remarks = document.write("Remarks: Good <br>");
} 
else if (percentage >= 60) {
    var grade = document.write("Grade: B <br>");
    var remarks = document.write("Remarks: You need to improve... <br>");
} 
else if (percentage >= 50) {
    var grade = document.write("Grade: C <br>");
    var remarks = document.write("Remarks: You need to improve alot... <br>");
} 
else if (percentage <= 60) {
    var grade = document.write("Grade: Fail <br>");
    var remarks = document.write("Remarks: Sorry <br>");
}
else {
    document.write("<h2>Wrong Input...</h2>");
}


// Task: 07
var secretNumber = 9;
var userInput = +prompt("Guess Number (ranging from 1 to 10 ) ");

if (userInput === secretNumber) {
    alert("Bingo! Your Answer is Correct.");
}
else if (userInput == ++secretNumber) {
    alert("Close enough to the correct answer");
}
else {
    alert("Wrong Answer.! Try Again...");
}

// Task: 08
var num = +prompt("Give the number to check if it's divisible by 3 or not: ")

if (num % 3 == 0) {
    alert("Yes This is Divisible by 3.");
}
else {
    alert("This number is not Divisible by 3.");
}

// Task: 09
var number = +prompt("Give the number to check if it's Even or Odd: ");

if (number % 2 == 0) {
    alert("This is Even Number")
}
else {
    alert("This is Odd Number")
}

// Task: 10
var temp = +prompt("Enter Temperature: ")

if (temp > 40) {
    alert("It's too hot Outside.")
}
else if (temp > 30) {
    alert("The weather today is Normal.")
}
else if (temp > 20) {
    alert("Today’s Weather is cool.")
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.")
}

// Task: 11
var input1 = +prompt("Enter First Value: ");
var input2 = +prompt("Enter Second Value: ");

alert("For Addition = + \nFor Subtraction = - \nFor Multiplication = * \nFor Division = / \nFor Modulus = %");

var operator = prompt("What operation do you want to perform: ");

if (operator === "+"){
    alert((+input1) + (+input2));
}
else if(operator === "-"){
    alert(input1 - input2);
}
else if(operator === "*"){
    alert(input1 * input2);
}
else if(operator === "/"){
    alert(input1 / input2);
}
else if(operator === "%"){
    alert(input1 % input2);
}
else {
    alert("Wrong Input");
} 
