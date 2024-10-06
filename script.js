const wordList = [
  "apple",
  "banana",
  "orange",
  "grape",
  "cherry",
  "pear",
  "mango",
  "peach",
  "watermelon",
  "plum",
];

function generateWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomIndex];
  document.getElementById("wordBox").innerText = randomWord;
}
