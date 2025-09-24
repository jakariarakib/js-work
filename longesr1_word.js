function find_longest_word(str) {
  // Remove non-letter characters and convert to lowercase
  const lettersOnly = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  // Split the string into an array of words
  const words = str.split(' ');  
  // Initialize a variable to store the longest word
  let longest_Word = '';
    // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // The longest word should be updated if the current word is longer than the longest word.
    if (words[i].length > longest_Word.length) {
      longest_Word = words[i];
    }
  }  
  // Return the longest word
  return longest_Word;
}
const str = 'the quick brown fox';
console.log("The original string: "+str);
const result = find_longest_word(str);
console.log("The longest word of the said string: "+result)
console.log(result);
