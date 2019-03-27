"use strict";


//     let numbers=[];

//     let arrayLength = +prompt("Nece reqem reqem daxil edeceksiniz?");
//     let userInput;
//     while(isNaN(arrayLength)){
//     arrayLength = +prompt("Duz qeyd edin");
    

//     }
//    for(let i = 0; i < arrayLength; i++)
//    {
//     userInput = +prompt( i+1 + "-ci reqemi daxil edin");
//     numbers.push(userInput);

//     while(isNaN(userInput)){
//         userInput = +prompt("Duz qeyd edin");
//         numbers.push(userInput);

//     }
// }
//       console.log(numbers)

     
//       let max = numbers[0];

//       for (let i = 0; i < arrayLength; i++) {
//       if(numbers[i] > max)
//       {
//        max = numbers[i];
//       }
      
//     }
//     console.log("En boyuk eded " + max)

//     let min = numbers[0];

//     for (let i = 0; i < arrayLength; i++) {
//     if(numbers[i] < min)
//     {
//         min = numbers[i];
//     }
//   }
//   console.log("En kicik eded " + min)

//   let orta = 0;
//   let cem = 0;
//   for(let i = 0; i < arrayLength; i++){

//      cem = cem + numbers[i];
//      orta = cem / numbers.length; 

//   }
   
  
//    console.log("Orta reqem " + orta)


// let cut = 0; 
// let cutCem = 0;
// for(let i = 0; i < arrayLength; i++){
//   if(numbers[i] % 2==0) cutCem+=numbers[i]

// }

// console.log("Cut ededlerin cemi " + cutCem)
  

//  let cemButun = 0;
//  for( let i = 0; i < arrayLength; i++){
//      cemButun+=numbers[i]
//  }
// console.log("Butun ededlerin cemi " + cemButun)


// let tek = 0;
// let tekCem = 0;
// for(let i = 0; i < arrayLength; i++){
//     if(numbers[i]%2 ==1 ) tekCem+=numbers[i]
    
  
//   }
// console.log("Tek ededlerin cemi " + tekCem)

let words = [];
for(let i = 0; i < 5 ;i++)
{
  let word = prompt(i+1 + "-ci sozu daxil edin")
  words.push(word);
}
let maxWord = words[0];
let minWord = words[0]

for (const a of words) {
  a.length > maxWord.length ? maxWord = a :null;
  a.length < minWord.length ? minWord = a :null;
}
console.log(maxWord,minWord);








 
