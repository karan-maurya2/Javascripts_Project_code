
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

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
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
// let x= fruits.shift();
// let x= fruits.unshift("Saraah");
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

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   let x=fruits.toString();
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

let text="thas is karan maurya is good boy"

let x= text.indexOf("is");

let y= text.match(/as/is/g);
console.log(y);
console.log(x);





























  


