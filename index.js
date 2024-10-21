const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map((title) => {
    // Split the title into individual words
    let words = title.split(" ");

    // Capitalize only the first letter of each word, preserving the rest of the original word
    let titleCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the capitalized words into a single string
    return titleCaseWords.join(" ");
  });
}

// Test the function
console.log(titleCased());
