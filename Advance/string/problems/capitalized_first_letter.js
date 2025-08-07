// Capitalize the first letter of each word

const capiFirstLetter = (str) => {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
};

console.log(capiFirstLetter("hello how are you"));
// Output: "Hello How Are You"




const capiFirstLetters = str =>
  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
