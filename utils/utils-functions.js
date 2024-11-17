// Needs Correcting: A good practice in this case is to use a module instead classes with named exports.
// This approach keeps the codebase modular, making it easier to manage, reuse, and test the functions across different files. Named exports also enable selective imports, which improves clarity and reduces dependency bloat. You can learn more about named exports here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

const utilsFunctions = {
  getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min) + min),
  getRandFromArr: (arr) => {
    const index = utilsFunctions.getRandomNumber(0, arr.length);
    return arr[index];
  },
};

// Can be Improved: The names of the functions could be use the same naming convention to make the code more consistent and easier to read. When we talk about return something, we can use the word "get" or "return" BUT we should choose one and stick to it. :D
const returnRandomData = () => {
  const data = {};
  data.names = utilsFunctions.getRandFromArr(RATING_LIST.names);
  data.ratings = utilsFunctions.getRandFromArr(RATING_LIST.ratings);
  return data;
};
