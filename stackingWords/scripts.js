// Create an addExcitement function that should console.log() rows of words. 
// It should take an array containing the words of a sentence and output 
// them in the developer console.


// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, character) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 1; i < theWordArray.length+1; i++) {
        if (i%3 === 0) {
            buildMeUp += `${theWordArray[i-1]}${character} `
            console.log(buildMeUp)
        } else {
            buildMeUp += `${theWordArray[i-1]} `;
            console.log(buildMeUp);

        }
        
        
    }
    
} 

// Invoke the function and pass in the array
addExcitement(sentence, "?");