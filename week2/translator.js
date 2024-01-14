// fritz rodriguez 1/12/24

function translateToPigLatin(word) {
    // Check if the word is empty or a single-letter word
    if (!word || word.length === 1) {
        console.log("Input can't be translated.");
        return;
    }

    // Convert the word to lowercase for consistent handling
    const lowerWord = word.toLowerCase();

    // Check if the word starts with a vowel
    if (['a', 'e', 'i', 'o', 'u'].includes(lowerWord[0])) {
        console.log(word + 'way');
    } else {
        // Check if the word starts with one or two consonants
        const firstTwoLetters = lowerWord.slice(0, 2);
        const remainingLetters = lowerWord.slice(2);

        if (!firstTwoLetters.includes('a', 'e', 'i', 'o', 'u')) {
            // Two consonants at the beginning
            console.log(remainingLetters + firstTwoLetters + 'ay');
        } else {
            // One consonant at the beginning
            console.log(remainingLetters + lowerWord[0] + 'ay');
        }
    }
}

function translatePhraseToPigLatin(phrase) {
    // Check if the phrase is empty
    if (!phrase) {
        console.log("Please enter a valid input.");
        return;
    }

    const words = phrase.split(' ');
    words.forEach(word => translateToPigLatin(word));
}

// Example usage:
translatePhraseToPigLatin("I really like every synth");