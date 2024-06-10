
let sentence : string = "ABDUL HADI SHAMSI";
let newArray = sentence.toLowerCase().split(" ").join("");// converting a string into an array and removing spaces between them
let lengthofArray : number = newArray.length;  //finding the length of letters in the array
let vovels: string = "aeiou";  //defining vovels 
let vovelsSum: number = 0;     // veriable initialization for vovels count
let nonVovelsSum : number = 0; // veriable initialization for non vovels count
for( let i= 0; i < lengthofArray; i++){ //  creating for loop 
    let letters: string = newArray[i];  // putting new array elements in letters veriable one by one
    if(vovels.includes(letters)){       // comparing vovels with letters
        console.log(letters, " this is a vovel")// iterating vovels with message
        vovelsSum++                               // adding vovels count
    } else{
        console.log(letters , " This is not Vovel"); //  iterating non vovels
        nonVovelsSum++                                // adding non vovels count
        
    }
}
console.log(`total vovels in sentence = ${vovelsSum}`); // iterating total vovels in the sentence
console.log(`total Non vovels in sentence = ${nonVovelsSum}`);// iterating total non vovels in the sentence
console.log(`total letters in the sentence are ${vovelsSum + nonVovelsSum} and no spaces calculated in it`);





