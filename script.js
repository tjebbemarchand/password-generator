const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const uppercaseElement = document.querySelector("#uppercase");
const lowercaseElement = document.querySelector("#lowercase");
const numbersElement = document.querySelector("#numbers");
const symbolsElement = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const clipboardBtn = document.querySelector("#clipboard");

const randomCharacters = {
    lower: getRandomLower(),
    upper: getRandomUpper(),
    number: getRandomNumber(),
    symbol: getRandomSymbol()
};

// Generator functions.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generateBtn.addEventListener("click", () => {
    const length = +lengthElement.value; // Convert string to number with "+" sign.
    const hasUpper = uppercaseElement.checked;
    const hasLower = lowercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbols = symbolsElement.checked;
});
