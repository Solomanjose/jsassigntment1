//1. Create a program that asks the user for two numbers and prints their sum.

let a=2
let b=3
let sum=a+b
console.log("program1 answer.="+sum);


// 2.Implement a program that calculates the area of a rectangle using given length and width.

let length=10
let breadth=20
let area=length*breadth
console.log("program 2 answer.area=" +area );

//3.Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

let age;
age=window.prompt("what's your age")
if(age>=18){
    console.log("program 3 answer:eligible for vote");
}
else{
    console.log("program 3 answer:not eligible to vote");
}

// 4.Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

// let mark;
// document.getElementById("submitted").onclick=function (){
//     mark =document.getElementById("mymark").value;
// }

//Program 4. Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

let grade=70
if(grade>=60){
    console.log("Program 4 answer:Passed the exam");
}
else{
    console.log("Program 4 answer: Not passed");
}

// Program 5. Implement a program that checks if a user's entered number is positive, negative, or zero.

let num= 0;
if(num<0){
    console.log("Program_5:Negative number");
}
else if(num>0){
    console.log("Program_5:Positive number");
}
else {
    console.log("Program_5:Number is Zero");

}

// Program 6: Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

let userage = 1;

switch (true) {
    case  userage < 13:
        console.log("Program 6 answer :User is a child ");
        break;
    case  userage < 20:
        console.log("Program 6 answer :User is a teenager ");
        break;
    case userage < 60:
        console.log("Program 6 answer :User is an adult ");
        break;
    default:
        console.log("Program 6 answer :User is a senior ");
}

// Program 7: find the square of each number in an array=[1,3,9,12,15,18,21] using loop

arr=[1,3,9,12,15,18,21];
let len=arr.length;
let i=0;
for(i=0;i<=len;i++){
    console.log(arr[i]*arr[i]);
}

// Program 8:Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

limit=10
let j=0
sum=0
for(j=0;j<=limit;j++){
    if(j%2!=0){
        console.log("numbers are "+j);
        sum=sum+j
        console.log("Sum is " +sum);
    }
}

