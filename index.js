let vowelCount = document.querySelector("#vowel-count");
let consonantsCount = document.querySelector("#consonants-count");
let aCount = document.querySelector("#a-count");
let eCount = document.querySelector("#e-count");
let iCount = document.querySelector("#i-count");
let oCount = document.querySelector("#o-count");
let uCount = document.querySelector("#u-count");
let wordCount = document.querySelector("#word-count");
let letterCount = document.querySelector("#letter-count");
let input = document.querySelector("#input");

// regex
let regex = /\w+/gi;

input.oninput = function () {
  let vowel = 0;
  let consonant = 0;
  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;
  let word = 0;
  let letter = 0;
  input.value
    .split(" ")
    .filter((e) => !!e)
    .forEach((ele) => {
      word++;
      ele
        .toLowerCase()
        .split("")
        .filter((e) => e.match(regex))
        .forEach((l) => {
          letter++;
          switch (l) {
            case "a":
              a++;
              break;
            case "e":
              e++;
              break;
            case "i":
              i++;
              break;
            case "o":
              o++;
              break;
            case "u":
              u++;
              break;
          }
        });
    });
  vowel = a + e + i + o + u;
  letterCount.innerText = letter;
  vowelCount.innerText = vowel;
  consonantsCount.innerText = letter - vowel;
  aCount.innerText = a;
  eCount.innerText = e;
  iCount.innerText = i;
  oCount.innerText = o;
  uCount.innerText = u;
  wordCount.innerText = word;
};
