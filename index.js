
    // console.log(typeof 1);

    // let temperature = 60;
    // console.log(`the temperature is  ${temperature}`);

    // if (temperature > 70) {
    //     console.log("Outside weather is warm");
        
    // }


    // if (1 > 2) {
    //     num = 1;
    //  }
    //  console.log(num === 1);
// ............................................................................................
// let num=`Rahul is Boy`;

// function func() {
//     return 67 +6 ;
//  };
//  const result = func();
//  console.log(result);

// ......................................................................

// let num=function () {
//     return `this is function experession`;
// };
// let result = num();
// console.log(result);

// .............................................................................

// const func = function() {
//     let text = 'hello';
//     text = text + ' world';
//     return text;
//  };
//  const result = func();
//  console.log(result);

// .......................................................................................

//  When JavaScript reaches a return statement, the function will stop executing. hence output is "hello"
// const func = function () {
//     let text = 'hello';
//     return text;
//     text = text + ' world';
//     return text;
//  };
//  const result = func();
//  console.log(result);

// .............................................................................................


// const multiply = function (num) {
//     return num * num;
//  };
  
//  const arg = 5;
  
//  const result = multiply(arg);
//  console.log(result === 25);
// ................................................................

// const buttonElem = document.getElementById("button");
  
// buttonElem.addEventListener('click', () => {
//   const oldText = buttonElem.innerText;
//   return button.innerText = oldText === "ON" ? "OFF" : "ON";
// });
  
// ........................................................
// function changeText(id) {
//     id.innerHTML="opps..";
// }

//  function displayDate() {
//     document.getElementById("demo").innerHTML=Date();
    
//  }

//  document.getElementById("bdemo").onclick=showdate;

//  function showdate() {
//     document.getElementById("pdemo").innerHTML=Date();
//  }
 




//  function checkCookies() {

//     if (navigator.cookieEnabled == true) {
//    console.log( "Cookies are enabled.");
//     } else {
//       console.log( "Cookies are not enabled.");
//     }
    
//   }


// ...........................................

// function uppercase() {

//   const x=document.getElementById('fname');
//   x.value=x.value.toLowerCase();
// }

// function Mover(id) {
//     id.style.backgroundColor="blue";
//     id.innerHTML="Thank you"
    
// }

// function Mout(id) {
//     id.style.backgroundColor="yellow";
//     id.innerHTML="Good Bye"
    
// }


// const buttonElem = document.getElementById('wrapper');
// const inputElem =  document.getElementById('fname');

// buttonElem.addEventListener('click', () => {
//     const oldText = inputElem.value;
//       return inputElem.value = oldText === "ON" ? "OFF" : "ON";
//   });

// blur1()
// {

//     document.getElementById('demo').innerHTML="content changed";
// }



// document.getElementById("demo1").innerHTML=document.getElementById("demo2").innerHTML;



// var x, y, z;

// x=5;
// y=6;
// z= x + y;

// document.getElementById('semo').innerHTML = 
// ("the sum of  x + y =" + z + ".");

// var x, y, z;

// x=5+6;
// y= x* 10;


//  document.getElementById("semo").innerHTML= y;

// let carName = "Volvo";
// let carName;
// document.getElementById("demo").innerHTML = carName;

// const y= ["2","4","7"];

// const  cars =[];

// cars[0]="sab";
// cars[1]=1;
// cars[3]="hello12";

// console.log(cars);


// const x =["3", "2", "4"];

// x[4]="karan";


//


// console.log(typeof person[1] );

//

// // console.log(cars)
// cars.Friend="Rahul";

// console.log(typeof cars.value);



// cars[6]="Rahul"

// cars.push("Kajal")

// cars[cars.length]="Raj"
//  const person =[];

//  person["firstName"] = "John";
//  person["lastName"] = "Doe";
//  person["age"] = 46;

//  let x=person.length;
//  let y=person[0];
//  console.log(x);
//  console.log(y);

// const person =["Karan", "Saraah", 520134]

// const cars={Name:"Karan", value:4321, Last:"Maurya" }


// let x=person.pop();
// delete person[0];


// console.log(person);


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const person = myGirls.concat(myBoys);


// console.log(person);

// const ReverseString = str => [...str].reverse().join('');
//  
// let x=(ReverseString("Geeks for Geeks"));

// console.log(x);


// const person  = [40, 100, 1, 5, 25, 10];


// let x=person.sort(function(a , b) 
// {
//    return b-a;
// });

// let y=x.reverse();
// console.log(x);


// var obj={
//     name:"karan",
//     display: function(){
  
//       console.log(this.name)
//     },
//   };
  
//   var obj1={
//     name:"ABC",
//   };
  
//   obj.display()

// setTimeout(function () {
//     console.log("Good morning");
//   }, 2000);


// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };


// console.log(Object.values(obj));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x=fruits.toString();

// console.log(x);



// let x= cars[cars.lenght-1]
// console.log(cars.length);
// console.log(cars.sort());

// // let x=cars.push("Karan");
// var cars=["Karan", "Rahol", "RIYA"];
// // cars[3]="rahul"
// // cars[cars.lenght]="Rahul";


// let x= typeof fruits;


// let x=Array.isArray(fruits);
// let x= fruits.toString();
// let x= fruits.join("@");
// let x= fruits.pop();
// let x= fruits.push("Deepak");
// let x= fruits.push("Deepak");
// console.log(fruits);
// let x= fruits.shift();
// const fruits=["Karan", "rahul", "deepak","Kajal"]
// let x= fruits.unshift();
// console.log(fruits);
// let x= fruits[fruits.lenght]="Nida"

// console.log(fruits[fruits.lenght]="Nida");
//  let x=fruits[fruits.length]="lulu";

// const fruits=["Karan", "Rahul", "Kajal"];
// const Veg=["pea","tomato","cabbage"];
// const cars=["volvo", "maruti","ford"];

// let x= fruits.concat(Veg);
// let y=cars.concat(Veg, fruits);
// let Z=cars.concat("DEEP", "PIG");
// console.log(x);
// console.log(y);
// console.log(Z);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits.splice(0,1) ;
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   let x=fruits.toString();
//   let y=fruits.join("@");
//   console.log(y);
// let x;
// x=5;

// let x= myfuction(3, 5)
// function myfuction(a, b) {
//     return a*b;
// }

// const x=["2", "4", "3", "1"];
// const z=["d", "b", "a", "c"];
// let r=z.sort().reverse();
// let y=x.sort().reverse();
// console.log(y);
// console.log(r);

// const abc={
//     name:"Karan",
//     number: 123,
//     Age:25,
//     Rollno:"BCAMCA"
// }

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let x = text.length;



// let x= "we are so-called \"Maurya\" from the north."
// let y= "we are so-called \'Maurya\' from the north."
// let z= "we are so-called \\ from the north."
// console.log(x);
// console.log(y);
// console.log(z);

// let x="john"

// console.log(x);

// let y=new String("John");
// console.log(y);

// function calcAge(age) {
// 	return age*365;
// }

// let x=6;
// if(x>0){
// 	console.log(calcAge(x));
// }

// const words = ["thaw", "achievement", "gain", "outlet", "difference"]

// let x=words.filter(word => word.length < 5);
// let y=words.map(word => word.length < 5);
// console.log(x);
// console.log(y);


// function addition(num) {
// 	// const numPlusOne = num + 1
//     // return numPlusOne;
// 	// return num +=1;
//     // return ++num;

//     return num+1;
// }

// function cubes(a) {
// 	return a ** 3
// }

// function cubes(a) {
// 	return Math.pow(a,3);
// }

//  const cubes=a=>a**3

// const cubes = a => a * a * a;

// const cubes=(a)=>{
//     return a**3;
// }

// const findPerimeter = (h,w) => h + w << 1
// let x=5;
// let y=6;
// function findPerimeter(height, width) {
// 	return(2*(height+width));
// }
// console.log(findPerimeter(6, 4));
// console.log(findPerimeter(x, y));


// function nextEdge(side1, side2) {
// 	if(side1 > 0 && side2 > 0) {
// 		return (side1 + side2) - 1;
// 	}else {
// 		return;
// 	}
// }
// function nextEdge(side1,side2){
//     let result = (side1 + side2) -1;

//     return result
// }

// function nextEdge(side1, side2) {
//     return (side1 + side2) - 1;	
//     }
    
//     let x, y;
//     if(x>0 & y>0){
//     console.log(nextEdge(x, y))}


// console.log(null); // null
// console.log(typeof null); // object


// console.log(undefined); // undefined
// console.log(typeof undefined); // undefined


// console.log(null == undefined); // true

// console.log(null === undefined); // false

// console.log(9-"5");
// console.log(typeof (9-"5"));

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324


// let s = 'JavaScript';
// s[0] = 'j';
// console.log(s)

// let s1 = Symbol();
// console.log(Symbol() == Symbol());

// let num=0o71;
// let numm=070;
// let z=num+numm;

// console.log(z);
// console.log(num);
// console.log(numm);


// let text="eoodglobal"
// let x= text.indexOf("glo");
// console.log(x);


// console.log(y);

// let x= text.replace("thas", "this")
// let x= text.toUpperCase();
//  let x =text.toLowerCase()

// let text="thas is honey is shit girl"

// let x=text.split(",");

// console.log(x); 
// let y= text.match(/shi/g);

// let x=3.14e5;
// console.log(x);
// let y=123e-8;

// let x = "100";
// let y=10;
// let z= x/y;
// console.log(isNaN(z));
// // console.log(y);



// let text = num.toString(8);
// console.log(text );
// console.log(typeof text);

// let y=(123).valueOf();
// let z =(100+23).valueOf();

// let x=num.toExponential();
// let x=num.toFixed();
// let x=num.toPrecision();
// let y = new Date("2017-09-30");
// let x=Number(y)

// let num = 123.599999;

// console.log(Math.PI); // RETUEN I value.

// let x=(0, 150, 30, 20, -8, -200);

// console.log(Math.round(num));
// console.log(num.toFixed());
// console.log(num.toPrecision());
// console.log(Math.pow(x, y));
// console.log(Math.sqrt(y));
// console.log(Math.abs(num));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.sin((60 * Math.PI / 180)));
// console.log(Math.max(0, 150, 30, 20, -8, -200));
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log((Math.random()*11));

// let x= new Date();
// // let y= x.getFullYear();
// // let y=x.getTime()
// // let y=x.getHours()


// // let y=x.getMilliseconds().

// // let y=x.getUTCDate();

// // let y=x.getSeconds();
// // let y=x.getMinutes()
// // let y=x.getDay();
// // let y=x.getMonth();
// // let y=x.getHours()
// let y=x.getTime()
// // let y=x.setFullYear(2020);
// // let y=x.getDay();
// // let y =x.toUTCString();
// let z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let u=z[x.getDay()]
// console.log(x);
// console.log(y);
// console.log(u);


// let x=new Date();

// let y=["1","2", "3", "4","5","6","7","8","9","10","11","12"]
// // let y=x.getSeconds();
// let z=y[x.getMonth()];
// console.log(z);



// let today=new Date();
// let h = today.getHours();
// let m = today.getMinutes();
// let s = today.getSeconds();

// let z= h+m+s;

// console.log("Today now time is :" + h +":"+m+":"+s );


// function date() {

// var time = new Date(); 
// let x=time. getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
// checkTime(m);
// checkTime(s);
// document.getElementById("semo").innerHTML=x;
// setTimeout(date, 1000);
// }

// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }


// const arr=["karan", "kajal","Rahul", "dEeepak"];

// let x=arr instanceof Array;

// let y=Array.isArray(arr)
// console.log(x);
// console.log(y);

// let x=["Banana", "Orange", "Apple", "Mango"]


// let y=x.sort();
// console.log(y);
// let z=y.reverse();
// console.log(z);

// let s=[ 02, 43,19, 203,23, 30, 90]

// // for numbered array we can follow above method also
// let x=s.sort(function(a, b)
// {return b-a});

// console.log(x);

// let s=[ 102, 43,19, 203,23, 30, 90]

// let x=s.sort(function (a,b) {
//      return b-a
    
// });

// let y=x[0];

// console.log(y);

// let s=[ 102, 43,19, 203,23, 30, 90]

// let x=Math.min(s);

// console.log(x);

// let b =20;
// console.log(window.b);



//  // enter new scope, TDZ starts
//     let log = function () {
//         console.log(message); // messagedeclared later
//     };

//     // This is the TDZ and accessing log
//     // would cause a ReferenceError

//     let message= 'Hello'; // TDZ ends
//     log(); // called outside TDZ


// function date() {
//     return new Date()
// }
// let x=date();

// console.log(x);

// function sum(...args) {
//     return args
//       .filter(function (e) {
//         return typeof e === 'number';
//       })
//       .reduce(function (prev, curr) {
//         return prev + curr;
//       });
//   }

//   let result = sum(10,'Hi',null,undefined,20,50); 
// console.log(result);



// function filterBy(type, ...args) {
//     return args.filter(function (e) {
//       return typeof e === type;
//     });
//   }



// var obj={
//   name:"Karan",
//   display:function(){
//     console.log(this.name);
//   }
// };

// var obj1={
//   name:"Kajal"
// }
  
//  var x=obj.display();

//  console.log(x);

// function myFunc()
// {
//     console.log("Welcome to");
//     // This will be executed after executing the previous log.
//     (function() { console.log("GeeksForGeeks!"); })();
//     console.log("Hi There!");
// }
  
// // Calling the Function.
// myFunc();


// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

// //Method 1: Convert the keys to Array using - Object.keys()
// console.log(Object.entries(obj));


// function func1() {
//   return {
//     name: "Akarshan"
//   };
// }function func2() {
//   return
//   {
//     name: "Akarshan"
//   };
// }console.log(func1())
// console.log(func2())



// function mul(x) {
//   return function(y) {
//      return function(z) {
//         return x*y*z;
//      }
//   }
// }console.log(mul(2)(3)(4)); //output is 24



// let y=("a", "e", "f","b","d","k");



// function abc(str) {
//    //  return str.split(' ').reverse().join( '');
//    //   return [...str].reduce((x, y) => y.concat(x));}

// }
// console.log(abc("Karan is love"));

// let x="winning everyone heart";

// let y =[...x].reverse().join(" ")

// console.log(y);



// function color() {

//    return 2*4;
//    console.log("hellp"); // will not print;
//  }
// console.log(color());


// function give(input) {
//    // return 'input'; // instead of "apple" the output will be "input " in console
//    return input;
//  }
//  let result = give('apple');
//  console.log(result);

// const a = { name: 'John', age: 26 };
// const b = { name: 'John', age: 26 };

//  console.log( a === b);  // false
//  console.log( a.name === b.name);  // false
//  console.log( a.name === b.age);  // false
//  console.log( a.age === b.age);  // false

//  const c=["a", "b" ,"c"];

//  const d=["a", "b" ,"c"];

//  console.log( c === d); 
//  console.log( c[0] === d[0]); 


// function whereIs(name) {
//    return 'Where is ' + name + '?';
//  }
 
//  let x = whereIs(Jacky);
//  console.log(x); // error as output// jacky passed as variable and its not defined
//  console.log( typeof x);
 


// function log(karan){
// // return karan;
// // return "karan " + karan;
// console.log("karan");
// console.log(karan);
//    }
//    console.log(log( "Maurya"));


// Write a function shout that takes a string and returns this string duplicated. 
// In addition, the return should be logged.
// function shout(word) {
//    let result = word + word;
//    console.log(result);
//    return result;
//  }


// console.log(shout( 'Fire'));
//  console.log( "Ai".length); // 2


// console.log("AI".length);
// let x="karan";
// console.log(x.length);

// let town="Lisa SONA";
// let output=town.toUpperCase();
// let input=town.toLowerCase();
// console.log(output);
// console.log(input);



// Write a function toCase that takes a string and returns that string in lowercase and 
// uppercase with - as delimiter.

// function toCase(Lisa){
//    return Lisa.toLowerCase() + "-" + Lisa.toUpperCase();
//    }
//    let x="sona"
//    console.log(toCase(x));



// let word="Frantz";
// let keep='100';
// let char0=word.charAt(4);
// let char1=word.charAt(5);
// let char2='Frantz'.charAt(0);
// let char3=keep.charAt(2);
// let char4="Frantz7".charAt(6);

// console.log(char0, char1, char2);
// console.log(char3);
// console.log(char4);


// Write a function shortcut that takes
//  two strings and returns the initial letters of theses strings.
 
// function shortcut( karan,saraah){
//    return karan.charAt(0) + saraah.charAt(0);
//    }
//    console.log(shortcut("Karan","Saraah"));


// let input="karan Maurya    Saraah    ";

// let x=input.trim();
// console.log(x);


// Write a function firstChar, which returns the first
//  character that is not a space when a string is passed.
// function firstChar(text) {
//    let trimmedText = text.trim();
//    return trimmedText.charAt(0);
//  }
//  console.log(firstChar(" Rahul Kumar "));
 


// String: indexOf()
// To determine the first occurrence of a string within another string, 
// use the indexOf method: The indexOf method is case sensitive. 
  
// let x="karanMaurya";
// console.log(x.indexOf("ma")); // -1 beacause ma is case sensitive character
// console.log(x.indexOf("nM"));// 4



// Write a function indexOfIgnoreCase taking two strings and 
// determining the first occurrence of the second string in the first string. The function should be case insensitive.

// function indexOfIgnoreCase(s1, s2) {
//    let s1Lower = s1.toLowerCase();
//    let s2Lower = s2.toLowerCase();
//    return s1Lower.indexOf(s2Lower);
//  }

//  console.log(indexOfIgnoreCase("Karan", "Ara"));
//  console.log(indexOfIgnoreCase("Karan", "ra"));

// substr() 	Extracts a number of characters from a string, from a start index (position)

// let x="karan is good boy";
// let y=x.length;
// let y=x.charAt(6);
// let y=x.trim();

// let z=x.substr(5,5);
// let z=x.substr(7);
// let z=x.substr(0,1);
// let z=x.substr(x.length-1, 1);
// console.log(y);
// console.log(z);

// substring() 	
// Extracts characters from a string, between two specified indices (positions)
// start character is included and but end is not included.

// let text = "Hello world!";
// // let result = text.substring(1, 4);
// // let result = text.substring(2);

// // If start is greater than end, parameters are swapped:
// // let result = text.substring(4, 1);

// // If "start" is less than 0, it will start from index 0:
// // let result = text.substring(-3);

// // let result = text.substring(0, 1);
// let result = text.substring(text.length - 1);
// console.log(text.length);
// console.log(result);



// Write a function firstWord, taking a string and returning the first word in that string.
//  The first word are all characters up to the first space

// function firstWord(s) {
//    let firstBlank = s.indexOf(' ');
//    return s.substr(0, firstBlank);
//  }
//  let x=firstWord('see and stop');
//  console.log(x);

// String: replace()
// The replace method replaces a substring with another: 

// let x="ECMAScripts";
// let y=x.replace("ECMA", "Java");
//Only the first occurrence is replaced
// let y = 'Dada'.replace('a', 'i');//  output will be Dida not Didi
// console.log(y); 


// Write a function normalize, that replaces '-' with '/' in a date string.

// function normalize(s){
//    let y=s.replace("-", "/");
//    return y.replace("-", "/");
//    }
//    console.log(normalize('20-05-2017'));


// Write a function toFahrenheit that converts a 
// temperature from Celsius to Fahrenheit.

// function toFahrenheit(celsius) {
//    return 1.8 * celsius + 32;
//  }
//  console.log(toFahrenheit(35));


// let y1 = Math.sqrt(9);
// let y2 = Math.pow(10, 3);
// console.log(y1, y2);
// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle.
//  The length of the two legs is passed to the function. 
// Tip: In a right triangle the Pythagorean theorem is valid.
//  If a and b are the lengths of the two legs and c is the length of the hypotenuse, 
//  the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

// function hypotenuse(a, b){
//    let c=Math.pow(a,2) + Math.pow(b,2);
//    return Math.sqrt(c);
//    }
//    console.log(hypotenuse(3, 4));

// let x=(3,4,7,8,6,2,23)
// let min = Math.min(3,4,7,8,6,2,23,56); // 2 correct
// let mins = Math.min(x); // 23 wrong
// console.log(min, mins);

// let y=Math.max(3,4,7,8,6,2,23) //23 correct
// console.log(y);

// Write a function midrange, that calculates the midrange of 3 numbers.
//  The midrange is the mean of the smallest and largest number.

// function midrange( a, b, c){
//    return (Math.min( a, b, c) + Math.max( a, b, c))/2;
//   }
//   console.log(midrange( 2,5 , 8));


// Write a function area that calculates the area of a circle.
//  The function is given the radius of the circle.

// function area(r){
//    let x=(Math.PI)*(Math.pow(r ,2));
//    return x;
//   }

// Rounding
// If you want to round a number, you can use the
//  Math.round(), Math.floor() and Math.ceil() functions. 

// Math.round() rounds a number to the nearest integer, 
// Math.floor() rounds a number downwards to the nearest integer and
//  Math.ceil() rounds a number upwards to the nearest integer.

// let x=3.45;
// let y=Math.round(x);
// let y=Math.floor(x);
// let y=Math.ceil(x);
// console.log(y);


///////////////////////////////////////////////////////////
// If the Math.round function is called with a null value, it returns 0.
/////////////////////////////////////////////////////////////

// Write a function round100 that rounds a number to the nearest hundred.

// function round100(num) {
//    return Math.round(num / 100) * 100;
//  }

// function roundUpToNearest100(num) {
//    return Math.ceil(num / 100) * 100;
//  }

// function roundDownToNearest100(num) {
//    return Math.floor(num / 100) * 100;
//  }

// function randomIntFromInterval(min, max) { // min and max included 
//    return Math.floor(Math.random() * (max - min + 1) + min)
//  }
//  const rndInt = randomIntFromInterval(1, 6)
//  console.log(rndInt)

// parseInt()
// Sometimes you want to read a number from a string
// If parseInt cannot read an integer, it returns NaN (Not a Number). 


// let x="100 is scored by karan"
// let n1 = parseInt('text', 10);
// let n2 = parseInt('No. 10', 10);
// let n3 = parseInt(x, 10);
// console.log(n1, n2, n3);

// function add(s) {
//    let summand1 = parseInt(s, 10); 
//    let indexPlus = s.indexOf('+');
//    let sAfterPlus = s.substr(indexPlus + 1);
//    let summand2 = parseInt(sAfterPlus, 10);
//    return summand1 + summand2;
//  }
//  console.log(add("4+9"));

// Write a function nand that takes two Boolean values.

//  If both values are true, the result should be false. 
// In the other cases the return should be true.

// The Boolean operators have an order: 
// First NOT, then AND, last OR. 
// If you want to change this order, use parentheses: 

// 1st way
// function nand(a, b) {
//   let and = a && b;
//   return !and;
// }
// 2nd way
// function nand( a, b){
//   if(a && b ==true){
//   return false;
//   }
//   else{
//   return true;
//   }
//   }



// Write a function xor that takes two Boolean values.
//  If both values are different, the result should be true.
//   If both values are the same, the result should be false.

// function xor( a, b){
//   if(a !=b){
//   return true
//   }
//   return false
//   }

// Example: repdigit(22) should return 'Repdigit!'
//  and repdigit(23) should return 'No Repdigit!'

// function repdigit(a){
//   let s= a.charAt(0);
//   let r=a.charAt(1);
//   if(s===r){
//   return 'Repdigit!'
//   }
//   return'No Repdigit!'
//   }
//  console.log(repdigit("28"));


// function repdigit(n) {
//   let ones = n % 10;
//   let tens = Math.floor(n / 10);
//   if (ones === tens) {
//     return 'Repdigit!';
//   }
//   return 'No Repdigit!';
// }
// console.log(repdigit(29));


// Write a function toArray that takes 2 values and returns these values in an array.

// function toArray(a, b){
//   let arr=[];
//   arr[0]=a;
//    arr[1]=b;
//     return arr
//   }

// function toArray(a, b){
//   let arr=[a, b];
//   return arr
//   }


// Write a function setFirstElement that takes an array and an arbitrary variable.
//  The variable should be inserted as the first element in the array.
//  The array should be returned.

// function setFirstElement(anArray, firstElement) {
//   anArray[0] = firstElement;
//   return anArray;
// }

// Write a function rotate that rotates the elements of an array.
//  All elements should be moved one position to the left. 
//  The 0th element should be placed at the end of the array. 
//  The rotated array should be returned.

// function rotate(anArray) {
//   let element0 = anArray.shift();
//   anArray.push(element0);
//   return anArray;
// }


// Write a function add that adds an element to the end of an array.
//  However, the element should only be added if it is not already in the array.

// function add(arr, number) {
//   if (arr.indexOf(number) > -1) return arr;  // arr.indexOf(number)=-1
//   else return [...arr, number];
// }

// function add(arr, number) {
//   if (arr.indexOf(number) > -1) {return arr;
// }
//   else{
// let text=arr.push(number)
//  return arr;
// }
// }

// Array: concat()

// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let a3 = a1.concat(a2); // correct
// // let a3 = (a1.concat(a2));//correct
// // let a3=[...a1, ...a2] //correct
// console.log(a3);

// Write a function concatUp that concatenate two arrays. 
// The longer array should be appended to the shorter array.
//  If both arrays are equally long,
//   the second array should be appended to the first array.

// function concatUp(firstArray, secondArray) {
//   if (secondArray.length >= firstArray.length) {
//     return firstArray.concat(secondArray);
//   }
//   return secondArray.concat(firstArray);
// }

// Write a function halve that copies the first half of an array. 
// With an odd number of array elements, 
// the middle element should belong to the first half.

// function halve(arr){
//   if(arr.length%2==0){
//   return arr.slice(0, (arr.length)/2 );
//   }
//   return arr.slice(0,(Math.ceil((arr.length)/2 ) ));
//   }
//   console.log(halve([1,2,3,4,5,6,7]));


// Write a function flat that flattens a two-dimensional array with 3 entries.

// let arr= [[1,2] ,
// [3,4], [ [5,6,[7],8,9],[10,[11,12],]]];

// function flat(lousha){
//   let s=lousha.flat(3);
//   return s
//     }
//     console.log(flat(arr));
// ................................................
//  function Flat(){
// let s=[].concat(...arr);
// return s
//   }
//   console.log(Flat(arr));
// ..............................................
//  function Flat(loshu){
// let s=[].concat(...loshu);
// return s
//   }
//   console.log(Flat(arr));

// ...........................................
// let row1 = [4, 9, 2];
// let row2 = [3, 5, 7];
// let row3 = [8, 1, 6];
// let loshu = [row1, row2, row3];

// function Flat(){
//   let s=[...row1,...row2, ...row3];
//   return s
//     }
//     console.log(Flat());

// function Flat(){
//   let s=[].concat(row1, row2, row3);
//   return s
//     }
//     console.log(Flat());
// .....................................................
// let row1 = [4, 9, 2];
// let row2 = [3, 5, 7];
// let row3 = [8, 1, 6];
// let loshu = [[row1, row2], row3];


// median
// function Flat(arr){
//   let s=arr.flat(2);
//   return s
//     }
//     console.log(Flat(loshu));

// let arr= [[1,2] ,
// [3,4], [5,[6,7,8],9],[10,[11],12],];
// console.log(arr.flat(2));


// let foo = null;
// let s;

// console.log(foo);
// console.log(s);

// console.log(typeof foo);
// console.log(typeof s);

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(null==0);
// console.log(null===0);
// console.log(undefined==0);
// console.log(undefined===0);

// Write a function cutComment that takes one line of JavaScript
//  and returns a possible line comment trimmed. 
//  If the line contains no line comment, null should be returned. For simplicity, 
//  we assume that the code does not contain the comment characters within a string.

// const cutComment = string => {
//   let onlyComment = string.indexOf('//');
//   if (string.indexOf('/') < 1) {
//   return null;
//   }
//   return string.substr(onlyComment+2).trim();
//   }

// function addTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(addTo("5"));


// function digitsum(n){
//   let sum=0;
//  while (n!=0){
//   sum = sum + n % 10;
//   n= Math.floor(n/10);
//   }
//    return sum;
//   }
//   console.log(digitsum(0));


// let x="karan maurya"
// let s=["karan", "Maurya"]

// console.log(x.toString());
// console.log(s.toString());
// console.log(s.sort());


// function abc(str) {
//    //  return str.split(' ').reverse().join( '');
//    //   return [...str].reduce((x, y) => y.concat(x));}

// }
// console.log(abc("Karan is love"));

// // let x="winning everyone heart";
// let x=[11,32,63,48,15]

// // let y =[...x].reverse().join(" ")
// let y=x.sort().reverse();

// console.log(y);

//  // Function to reverse string
//     function ReverseString(str) {
//       return str.split('').reverse().join('')
//       }
//         
//       // Function call
//       console.log(ReverseString("Geeks for Geeks"))


// let x=["apple", "orange", "apple", "orange"];

// let y=new Set(x);

// let s=[...y];

// console.log(s);


let x=12345;

// let y=x.toString();
// let s=y.split('')

// // console.log(y.split(''));
// console.log(s.reverse()
//        .join(''));

console.log(x.reverse());