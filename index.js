
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


let obj = { id: "1", name: "user22", age: "26", work: "programmer" };


console.log(Object.values(obj));









  


