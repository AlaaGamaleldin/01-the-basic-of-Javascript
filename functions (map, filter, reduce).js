
let swappingCases = "aLAa";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "Gam32al Eld45in";

let sw = swappingCases.split('').map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
})
.join('');
console.log(sw);

let inv = invertedNumbers.map(function (ele) {
    return -ele;
});
console.log(inv);

let ing= ignoreBooleans.split('').map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "" ;
})
.join('');
console.log(ing);
///////////////////////////////////////////////

//Arrow Function Version

let swa = swappingCases
.split('')
.map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase())
.join('');
console.log(swa);
///////////////////////////////////

// Filterr function 
let sentence = "I Love Foood code Too Playing Much";
let smallWords = sentence.split(' ').filter(function (ele) {
   return ele.length <= 4;
})
.join(' ');
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = 'Elz123er4o';

let ign = ignoreNumbers
.split('')
.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : '';
})
.join('');
console.log(ign);

// Reduce 
//Syntax 
/*reduce(callBackFunction(Accumulator, 
    Current Val, 
    Current Index, 
    Source Array) {},initialValue)
    */
let nums = [10, 20, 15, 30];
 let add = nums.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`cureent element => ${current}`);
    console.log(`index element => ${index}`);
    console.log(`array => ${arr}`);
    console.log(acc + current);
    console.log(`@@@@@@@@`)

    return acc + current;
 });
 console.log(add);

 //////////////////////////////
 // chalange
 let theBiggest = ['Bla', 'Propaganda', 'Other', 'AAA', 'Battery', 'Test'];
 let check = theBiggest.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`cureent element => ${current}`);
    console.log(acc.length > current.length ? acc : current);
    console.log(`@@@@@@@@`)

    return acc.length > current.length ? acc : current;
 });
 console.log(check);

 /////////////////////////////////

 let removeChars = ['A', '@', '@', 'L', '@', '@', 'A', '@', 'A'];
  
 let finalString = removeChars
 .filter(function (ele) {
    return !ele.startsWith('@');
 })
 .reduce(function (acc,current){
    return `${acc}${current}`;
 });
 console.log(finalString);
 console.log(removeChars);