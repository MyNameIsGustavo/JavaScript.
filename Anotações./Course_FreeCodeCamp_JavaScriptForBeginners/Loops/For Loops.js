//Loops - For loops - Examples.

var myArray = [];
for(var i = 1; i < 6; i++){
    myArray.push(i)
}
console.log(myArray);

var myArray =[];
for(var i = 0; i <= 10; i +=2 ){
    myArray.push(i)
}
console.log(myArray);

var myArray =[];
for(var i = 10; i >= 0; i -=2){
    myArray.push(i)
}
console.log(myArray);

var myArray = [10,20,30,40, 50];
var total = 0;
for (var i = 0; i < myArray.length; i++){
    total += myArray[i];
}
console.log(total);