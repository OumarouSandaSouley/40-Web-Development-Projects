const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "1234567890".split("");
const characters = [
  "*",
  "µ",
  "!",
  "?",
  "{",
  "}",
  "[",
  "#",
  "]",
  "°",
  "=",
  "+",
  "-",
  "/",
  "&",
  "$",
  "£",
  "%",
  "ù",
  "é",
  "î",
  "ô",
  "û",
  "§",
  "à",
  "@",
  "ç",
  "^",
  "|",
  ":",
  "¤",
];
let dictionary = [];

const generate_btn = document.querySelector("#generate");
const allowletters = document.querySelector("#letters");
const allownumbers = document.querySelector("#numbers");
const allowcharacters = document.querySelector("#characters");
const allowuppercase = document.querySelector("#uppercase");
const size = document.querySelector("#size");
const resultBox = document.querySelector(".result");
const result = document.querySelector('#result')
const copyBtn = document.querySelector("#copy")

let password = []
copyBtn.addEventListener("click", ()=>{
  try {
    navigator.clipboard.writeText(password.join(""));
    alert("Copié avec succès");
  } catch (error) {
    alert("Une erreur est survenue", error);
  }
})





const populatePassword = (size, dictionary) => {
  password = [];
  for (let i = 0; i < size; i++) {
    let pos = Math.floor(Math.random() * dictionary.length);
    password.push(dictionary[pos]);
  }
  resultBox.style.display = "flex"
  result.innerHTML = password.join("")
};

generate_btn.addEventListener("click", () => {
  dictionary = []; // Clear dictionary before repopulating
  const sizevalue = parseInt(size.value, 10);

  if (allowletters.checked) dictionary.push(...letters);
  if (allownumbers.checked) dictionary.push(...numbers);
  if (allowcharacters.checked) dictionary.push(...characters);
  if (allowuppercase.checked) dictionary.push(...uppercase_letters);

  populatePassword(sizevalue, dictionary);
});
