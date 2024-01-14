// fritz rodriguez 1/12/24

function translateToPigLatin(word) {
    // Check if the word is empty
    if (!word) {
        console.log("Please enter a valid input.");
        return;
    }

    // Convert the word to lowercase for consistent handling
    const lowerWord = word.toLowerCase();

    // Check if the word is a one-letter word or starts with a vowel
    if (word.length === 1 || ['a', 'e', 'i', 'o', 'u'].includes(lowerWord[0])) {
        console.log(word + 'way');
    } else {
        // Check if the word starts with one or more consonants
        const consonantIndex = lowerWord.search(/[aeiou]/);

        if (consonantIndex > 0) {
            // Move letters from the first vowel onward to the front
            const consonants = lowerWord.slice(0, consonantIndex);
            const remainingLetters = lowerWord.slice(consonantIndex);
            console.log(remainingLetters + consonants + 'ay');
        } else {
            // Two consonants at the beginning
            const firstTwoLetters = lowerWord.slice(0, 2);
            const remainingLetters = lowerWord.slice(2);
            console.log(remainingLetters + firstTwoLetters + 'ay');
        }
    }
}

function translatePhraseToPigLatin(phrase) {
    const words = phrase.split(' ');
    words.forEach(word => translateToPigLatin(word));
}

// Example usage:
translatePhraseToPigLatin("I really like every synthesizer");