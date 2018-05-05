var cx= function(nm){
    console.log("hello this is just a start with" +nm)
}
cx(22)

//to avoid double entry in array
u=[1,2,2,3]
d= [...new Set(u)]
console.log(d)
//answer will be [1,2,3]

var output = (function(x){ delete x; return x; })(0);
 console.log(output);
var be
var x = (be)=>{
    console.log("hello this is x function" +be)
}

x(45)
 var a="ANNA";
 var b= a.toLowerCase()
 console.log(b)
 console.log(b.toUpperCase())

 g= "Global variable"


 var c = '12';
 console.log(isNaN(c))


 function abc(i){
    console.log("hello " +i)
    }
    abc(1)
    abc(2)
    abc(3)


 var ab=()=>{
     console.log('hello u r in a function '+ g)
 }
 ab()
 
 function xyz(x){
    return   function (y){
         return console.log((x+y))
     }

 }
xyz(5)(6)

var a={ } 
var b={ } 
console.log(a===b)

console.log("This is to break JS \n code.")


var summ=0
abcz = "abc_100_pqr_50_10_xyz" //160
s=abcz.split("_");
for (i =0; i<=6; i++){
    console.log(i)
    if(i%2!=0){
  summ=parseInt(summ)+parseInt(s[i])
    }

}
console.log(summ)
console.log("This is function inside function")
function hi(h, j=10){
    
    console.log(h +j )

}
hi(10)
hi(10,50)

console.log("============================================================================")

a=['abc','xyz','pqr']
var c= a.shift()
var d= a.unshift("zyx")
var e=a.toString()
var f =a.splice(1, 1, "qwr", "tyz")
var g=a.slice(1,3)

console.log(f)
console.log("============hello================================================================")

var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);   

console.log("============================================================================")
var y= 'gorakh'
console.log(isNaN(y))

console.log("============================================================================")

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

  console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'



var sum=0
abcz = "abc_100_pqr_50_10_xyz" //160
s=abcz.split("_");
console.log("waitttttttttttttt")
console.log(s)
for (i =0; i<=6; i++){
if(! isNaN(s[i])){
 sum = parseInt(sum)+ parseInt(s[i])
}
}

console.log(sum)



k=[1,2,3,4]
l= k.splice(2,2,7,8)
console.log(l)