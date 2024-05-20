// Q.23 Find the Character Is Vowel or Not ?

// ans:


function isVowel(char) {
    char = char.toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}


console.log(isVowel('A'));
console.log(isVowel('b'));
