
let student = {
    Name : "Kalyan",
    age : 18,
}
for(let key in student){
    console.log(key,student[key]);
}

a=parseInt(prompt("Enter number (Even Number to print table with even number  and odd  Number to print table with odd number for 2 table ):"));
if(a%2==0 && a!=undefined || null){
    for(let i=0;i<=10;i+=2){
        console.log("2 x "+i+" = " +(2 * i));
    }
}
else{
    for(let i=1;i<=10;i+=2){
        console.log("2 x "+i+" = " +(2 * i));
    }
}

var user=prompt("Enter your username (Output would be appended with its length): ");
while(user.charAt(0)!="@"){
    user=prompt("User name should start with @: ");

}
console.log(`User name is ${user}${user.length}`);
var str1=user+user.length;
var str2=user.concat(user.length);
console.log(str1);
console.log(str2);


// Calculating Avg :

var data=[99,98,96,97,100];
var sum=0;
for(let val of data){
    console.log(val);
    sum+=val;
}
var avg=sum/data.length;
console.log("For above data Avg is " +avg);

//item with 10% discount

var price=[250, 645, 300, 900, 501];
var FP=0;
for(let item of price){
    FP+=item * (10/100);
}
console.log(FP +" is the Final Price after 10% discount for given price.");

var str=[];
for(let i=0;i<5;i++){
    a=prompt(`Enter string ${i+1}: `);
    str.push(a);
}
console.log(str);
var str1=str.shift();
console.log(str);
var str2=str.splice(2,4,"NENU OCHHESA!!");
console.log(str);
str.push("Amazon");
console.log(str);



function countVowel(a){
    var count=0;
    b=a.toLowerCase();
    for(let val=0 ; val<b.length;val++){
        if(b[val]=='a' || b[val]=='e' || b[val]=='i' || b[val]=='o' || b[val]=='u'){
            count++;
        }
    }
    return count;
}
const CountVowels=(a)=>{
    var count=0;
    b=a.toLowerCase();
    for(let val=0 ; val<b.length;val++){
        if(b[val]=='a' || b[val]=='e' || b[val]=='i' || b[val]=='o' || b[val]=='u'){
            count++;
        }
    }
    return count;
}

var R=prompt("Enter a String (Finds No. of vowels in it! ) : ");
console.log(countVowel(R));

console.log(CountVowels(R));

// forEach loop in Arrays
var num=[];
for(let i=0;i<3;i++){
    let num1=parseInt(prompt(`Enter a number (Finds Square) : `));
    num.push(num1);
}
num.forEach((val)=>{
    console.log(`Square is ${val**2}`);
});

num.forEach(function sqr(val){
    console.log(val**2);
});


var marks=[99,98,96,90,78,58,14,45,78,97,30,67,88,93];

var filteredmarks = (marks.filter((val)=>{
    return val >= 90; }
));
console.log(filteredmarks);
/*

function Simple(val){
    return val >= 90;
}

var filteredmarks2 = (marks.filter(Simple(val)));
console.log(filteredmarks2);
*/

var number =parseInt(prompt("Enter a number : "));
var Array1=[];
for(let i=0;i<number;i++){
    Array1[i]=i+1;
}
var Sum=(Array1.reduce((accumulator,currentValue)=> {
    return accumulator+currentValue;
},0));
console.log(Sum);
var Product=(Array1.reduce((accumulator,currentValue)=> {
    return accumulator*currentValue;
},1));
console.log(Product);