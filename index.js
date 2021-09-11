//0 why javascript :- it improve the user experince of the web page by converting it from a static page into an 
  // intractive one

//1 values and variables in javascript
//this is name convention rule of js when declare variable

        //challange time 1


// var _myName="bhushan"; -----ok
// var 1myName="pawar" ---------not ok
// var _1my__Name =23; --------ok 
// var $myName = false;--------ok
// var Var = true;--------------not ok we can't put name as pridefine word of but if we change tha cases alphabate then we can put it

// console.log( _myName);
// console.log(typeof(_myName));

// console.log( _1my__Name);
// console.log(typeof(_1my__Name));

// console.log( $myName);
// console.log(typeof($myName));

// console.log( Var);
// console.log(typeof(Var));


        // Challange time 2


// console.log(10 + "20"); // 1020
// console.log(10 -"5"); //  5  bug in javascript
// console.log(" bhushan " + " pawar "); //bhushan  pawar
// console.log( " " + " ");
// console.log(" " + 0); //0
// console.log("web " + "developer"); //web developer
// console.log(true + true); //2
// console.log(true + false); //1
// console.log(false + true); //1 
// console.log(false - true); //-1

// //value of true = 1  & value of false = 0


        // 1 I.Q  difference between null and undifine ????


// var amiUseless = null;
// console.log(amiUseless); 
// console.log(typeof(amiUseless)); 

        // so basicali null is emtay value eg like its no use value empty
        // if we check null typeof it will show object and its 2bug of js

// var amiStandby;
// console.log(amiStandby);
// console.log(typeof(amiStandby));

        // so basically here we have not declare value of variable we only define it

// console.log(amiUseless == amiStandby);
// console.log(amiUseless === amiStandby);


        //2 I.Q  what is NaN ????


                // what is NaN? it means Not a number
                // NaN is the property of the global object
                // In other words, it is a variable in global ScriptProcessorNode
                // the initial value of NaN is Not-A-Number 

// var myphoneNumber = 9876543210;
// var myName = "bhushanpawar";

// console.log(isNaN(myphoneNumber)); // false
// console.log(isNaN(myName)); // true

// if(isNaN(myName)){
//     console.log("plz enter valid phone number");
// }


                // 3. Challange time 


// NaN == NaN;
// Number.NaN == NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(NaN===NaN); //false
// console.log(Number.NaN === NaN); //false
// console.log(isNaN(NaN)); // true
// console.log(isNaN(Number.NaN)); //true
// console.log(Number.isNaN(NaN)); //true


//combination of operand and operator is called expression

                
                //Assignment operators


// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// the simple assignment operator is equal (=)

// var x = 5;
// var y = 5;
// console.log("is both the x and y are equal or not" + x==y); // false 
// console.log( x==y); // true

// console.log(`is both the x and y are equal : ${x==y}`); //is both the x and y are equal : true




//Arithmatic operators
//An arithmatic operator takes numerical values
// (either literals or variables) as their operandsand
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator" +  27%4);





//Increment and decrement oprrator 
//operator: X++ or ++X  or X-- or --X
//if used postfix with operator after operand (for example, X++),
//the increment operator increments and returns the value before incrementing

// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);
//16
//15
// // this is postfix operator result it will place old value of variable 
// var num = 15;
// var newNum = num++ + 5;
// console.log(num);
// console.log(newNum);
// this postfix ans will below
//16
//20

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

//now let's see result of prefix below

// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);
// ans for ths is 
//16
//16

// var num = 15;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);
//16
//21

// var num = 15;
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);
//14
//19

//this first increment value and put that newvalue in new variable
//if used prefix , with operator before operand (for example, ++X),
//the increment operatopr increments and returns the value after icrementing.
//prefix increment operator means the variable is incremented first and then 
//the expression is evaluated using the new value of the variable.



//Comparision operators
//A comparison operator compares its operands and returns a logical value 
// base on weather the comparison is true
// var a = 30;
// var b = 10;

//Equal (==)
// console.log(a==b);

//Not equal (!=)
// console.log(a!=b);

// // greater than (>)
// console.log(a > b);

// // Greater than or equal to (>=)
// console.log(a >= b);

// // less than operator
// console.log(a < b);
 
// // less than or equal  (<=)
// console.log(a <= b);

// logiocal operator
//logical operators are typically used with Boolean (logical) values;
//when they are, they return a boolean value.

// var a = 30;
// var b  = -20;

// logical &&
//operands is true if the and only if all of its operands are true 

// console.log(a > b && b > -50 && b < 0); 

//logical OR (||)
//the logical or operator (logical disjunction)
//operands is true if and only if one or more of its operands is true

// console.log((a > b) || (b > 0) || (b < 0));

//logical NOT (!)
//the logical not operator (logical complement, negation)
//takes truth to falsity and vice versa.

// sahi ko galt or galat ko sahi kar deta hai 

// console.log( ! ((a>0)|| (b>0)) )
// console.log(! false);
// console.log(! true);




// 5  String Concatenation (operators)
// the concatenation operatror (+) concatenates two string value together,
//returning another string that is the uinon of the two operand string

// console.log("hello " + " world");


// challange time
// Q.1 what will be the output of 3**3?
// Sol.1 console.log(3**3); //basicall its 3 power 3 3x3x3
//console.log(10 ** -1) // basically its 1/10 ans will come 0.1


//Q.2 
//what will be the output when we add number and String

//Q.3 write program to swap two numbers?
//sol.3 
// var a = 5;
// var b = 10;

//output will be b=5, a=10
//1 approach using thired variable

// var c  = b ; 
// b = a;
// a = c;
// console.log("the value of a is " + a); // 10
// console.log("the value of b is " + b); // 5

//Q.4 write program to swap two numbers without using third variable

//sol.4

// var a = 36;
// var b = 69;
 
// b = a+b;
// a = b-a;
// b = b-a; 

// console.log("the value of a is " + a); // 69
// console.log("the value of b is " + b); // 36

//Interview questions  what is difference between  == vs ===

//== catch value and === also catch datatype

// var num1 = 5;
// var num2 = '5';
 

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2); //true
// console.log(num1 === num2); // false



// Section 6 control statement & loop

//If ... Else  the if statement executes a statement if a specified condition is truthy
//if the condition is falsy, another statement can be executed.

// var tomr = 'rain';

//  if(tomr == 'rain'){
//         console.log("pick umbrella");

//  }else{
//         console.log("not need umbrella");
//  }

 //5 challange time 
 //write a program that works out whether if a given year is a leap year or not?

//  var year = 2021;

//  if(year % 4 ==  0){
//          if(year % 100 == 0){
//                  if(year % 400 == 0){
//                         console.log("this year " + year + "is a leap year");
//                  }else{
//                 console.log("this year " + year + "is not a leap year");
//                 }
//         console.log("this year " + year + "is not a leap year");
//         }else{
//         console.log("this year " + year + "is a leap year");
//         }
// }else{
//         console.log("this year " + year + "is not a leap year");
// }

// this is for loop
// var myFriend = ['abhay', 'bhushan', 'akshy', ];

// for(var i=0 ; i<myFriend.length; i++){
//         console.log(myFriend[i]);
// }
//Aftert ES6 we have for.. in for ..of loop 

// var myFriend = ['abhay', 'bhushan', 'akshy', ];

// for(let element in myFriend){
//         console.log(element)
// }
//its result 0 1 2 

// for(let element of myFriend){
//         console.log(element)
// }
//its result abhay bhushan akshy

//Array.prototype.forEach()
//Calls a function for each element in the arrray

// var myFriend = ['abhay', 'bhushan', 'akshy', ];

// myFriend.forEach(function(element, index, array ) {
//         console.log(element + " index : " + index + " " + array);
// });

// myFriend.forEach((element, index, array) => {
// console.log(element + " index: " + index ) 
// });

//Array Subsection 2 searching and filter in an Array
//Array.prototype.indexOf()

// var ages = [10,12,19,20];
// console.log(ages);

// var b = ages.filter(checkadult);
// console.log(b);

// function checkadult(age){
//         return age >= 18;
// }


//.push()
// var ages = [10,12,19,20];
// ages.push('h', 'l', 2);
// console.log(ages);
// console.log(ages.length);

// const months = ['Jan','march','April','June','jully'];

// months.push('yo', 'hhhsd','hsjghs');
// console.log(months);


//pop method in array


// var ages = [10,12,19,20];
// console.log(ages.pop());
// console.log(ages);


//.shift() it removes the first element of an array


// var ages = [10,12,19,20];
// console.log(ages.shift());
// console.log(ages);

//challenge Time

//.splice()
//add and remove element from an array
//1. add dec at the end of array
//2. what is the return value of splice method
//3. update march to March
//4. delete june from array

// const months = ['Jan','march','April','June','jully'];
//sol1
// const newMonth = months.splice(months.length, 0, 'august', 'dec')
// console.log (months);

//sol2
// console.log (newMonth);

//sol 3
// const months = ['Jan','march','April','June','jully'];

// const newMonth = months.splice(1,1,'March');

// console.log(months);

// const indexOfMonth = months.indexOf('April');

// if (indexOfMonth != -1){
//         const newMonth = months.splice(indexOfMonth,Infinity);  
//         console.log(months); 
//         console.log(newMonth);  
// }else{
//         console.log('No such data found');
// }
//-------------------------------------------------------

//Array.prototype.map
// let newArray = arr.map(callback (currentValue, [ index , [ array] ]) {
//         // return element for newArray, after executing something 
// })

// const array1 = [1,4,9,25,16];

// let newArr =  array1.map((curElem, index, arr) => {
//         return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curEle, index, app1) => {
//         return `Index no = ${index} and the value is ${curEle}  belong to ${app1}`
// });
// console.log(newArr);
// it return new array without muting of old array


//challange time 
// 1. find the square root of each element in an array
// 2. multiply each element by 2 and return only those element which are greater than 10

//sol 1.
// let arr = [25, 36, 49, 64, 81 ];
// let arrSqr = arr.map((curEle) =>{
//         return Math.sqrt(curEle)
// })
// console.log(arrSqr);



//sol 2.
// let arr = [2,3,4,5,6];
// let arr2 = arr.map((curElm)=> curElm * 2 ).filter((curElm)=> curElm > 10);
// console.log(arr2);

//Reduce Method 
//flatten an array means to convert the 3d or 2d array into a single dimensional array

//The reduce() method executes a reducer function (that you provide) on each element of the array,resulting in single output value.
//The reducer function takes four arguments:
//Accumulator
//Current Value
//Current Index
//Source Array


// let arr = [5,6,2];
// let sum = arr.reduce((Accumulator,curElem,)=>{
//         debugger;
//         return Accumulator += curElem;
// },7)
// console.log(sum);

// sol 2.
// let arr = [2, 3, 4, 6, 8];
// let arr2 = arr.map((curElm) => curElm * 2 ).filter((curElm) => curElm > 10).reduce((accumulator,curElm) => {
//         return accumulator += curElm;
// });
// console.log(arr2);

// const arr = [
//         ['zone_1', 'zone_2' ],
//         ['zone_3', 'zone_4' ],
//         ['zone_5', 'zone_6' ],
//         ['zone_7', 'zone_8' ]
// ];
// let flatArr = arr.reduce((accum, currVal) => {
//          return accum.concat(currVal);
// })
// console.log(flatArr);


//Finding string in srting
//String prototype .indexOf (searchValue [, fromIndex])



//extracting string parts
//there are three method for it
// 1. slice(start ,end) 
//it extracts part of a string and return the extracted part in a new string
// var str= "Apple, Bananaa, Kiwi"
// let res = str.slice(5,-2)
// console.log(res);


//challange time
//display only 280 characters of a string like the 
//one used in Twitter?

// let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "


// 2. substring(start, end)
//its similar to slice()
// but it can't accept negative indexs
// var str= "Apple, Bananaa, Kiwi"
// let res = str.substring(8, -2);
// console.log(res); 
// it no use of  giving -2 it will show value from 0 index to given given index


// 3. substr(start, length)
//its similar to slice()
//the difference is that the second parameter specifies the length of the extarcted part
// var str= "Apple, Bananaa, Kiwi"
// let res = str.substr(0, 7); 
// console.log(res);
//for this no output will come 
//it use is if we want to show data from back side 
// let res = str.substr(-7); 
// console.log(res); 
// a, Kiwi this will show


//replacing String Content()
//String.prototype.replace(searchFor, replacewith)
//
//
// let myBio="my name bhush i am web developer";
// let replav =  myBio.replace('name', 'bame');
// console.log(replav);


//The charAt() Method 
//the charAt() Method return the character at a 
// specified index (position ) in a string

// let srt = "Hello world";
// console.log(srt.charAt(0));

//challange time
//Q. return the unicode of the character in a string



//new Date 
//Date objects are created with the new Date() constructor .
// let curDate = new Date();

// console.log(curDate);
// console.log(curDate.toLocaleString());
// console.log(curDate.toString());

//Date.now()
//Returns the numeric value corresponding to the current time-the number 
//of milliseconds elapsed since january 1 , 1970 00:00:00 UTC 


// console.log(Date.now());

//new Date(year, month, ...)
// 7 number specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
//Note: javascript counts months from 0 to 11

// var d = new Date();
// console.log(d.toLocaleString());

//Dates Method
//how to get indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());


// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


//time   Method
// let curTime = new Date(); 
//how to get indivisual date 
// console.log(curTime.getTime());
//the getTime() method returns the number of milliseconds since jan 1, 1970
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMillisecond());


//how to set an individual time
// let curTime = new Date(); 
// console.log(curTime.setTime());

//practice time
// new Date().toLocaleTimeString();

// new Date().toLocaleDateString();

// new Date().toLocaleString();

// math object in javascript 9session

// console.log(Math.PI);

// let num = 10.25;
// console.log(Math.round(num));


//Math.pow
// console.log(Math.pow(2,3));
// console.log(2**3);


//Math.sqrt()
//Math.sqrt|(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(66));

// Math.abs
// Math.ceil
// Math.floor
// Math.min
// Math.max
// Math.round

// console.log(Math.max(0,150,30,20,-8,-200));

// Math.random() //it return a random number between 0 (inclusive,) and 1
// console.log(Math.random()*10);


// Math.trunc it return positive