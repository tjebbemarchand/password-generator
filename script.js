const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const uppercaseElement = document.querySelector("#uppercase");
const lowercaseElement = document.querySelector("#lowercase");
const numbersElement = document.querySelector("#numbers");
const symbolsElement = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const clipboardBtn = document.querySelector("#clipboard");

const randomCharacterFunctions = {
    hasLower: getRandomLower,
    hasUpper: getRandomUpper,
    hasNumber: getRandomNumber,
    hasSymbol: getRandomSymbol
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

function generatePassword(passwordLength, hasUpper, hasLower, hasNumber, hasSymbol) {
    // 1. Initialize password variable.
    let generatedPassword = "";

    // 2. Filter out unchecked types.
    const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
    const typesArray = [{ hasUpper }, { hasLower }, { hasNumber }, { hasSymbol }].filter(
        item => Object.values(item)[0]
    );
    if (typesCount === 0) return "";

    // 3. Loop over passwordLength. Call generator function for each type.
    for (let i = 0; i < passwordLength; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomCharacterFunctions[funcName]();
        });
    }

    // 4. Add final password to password variable and return.
    return generatedPassword.slice(0, passwordLength);
}

// Generate password on generate button click.
generateBtn.addEventListener("click", () => {
    const passwordLength = +lengthElement.value; // Convert string to number with "+" sign.
    const hasUpper = uppercaseElement.checked;
    const hasLower = lowercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword(
        passwordLength,
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol
    );
});
