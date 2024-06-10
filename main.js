var sentence = "ABDUL HADI SHAMSI";
var newArray = sentence.toLowerCase().split(" ").join("");
var lengthofArray = newArray.length;
var vovels = "aeiou";
var vovelsSum = 0;
var nonVovelsSum = 0;
for (var i = 0; i < lengthofArray; i++) {
    var letters = newArray[i];
    if (vovels.includes(letters)) {
        console.log(letters, " this is a vovel");
        vovelsSum++;
    }
    else {
        console.log(letters, " This is not Vovel");
        nonVovelsSum++;
    }
}
console.log("total vovels in sentence = ".concat(vovelsSum));
console.log("total Non vovels in sentence = ".concat(nonVovelsSum));
console.log("total letters in the sentence are ".concat(vovelsSum + nonVovelsSum, " and no spaces calculated in it"));
