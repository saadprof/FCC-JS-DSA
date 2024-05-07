const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultP = document.getElementById("resultP");

const sampleStr = "___ R Ace C Ar ___";
const checkPalindrome = (str) => {
    // Regular expression to replace unwanted characters from string
    const regex = str.toLowerCase().replace(/[\W_]/g, "");
    const reversedStr = regex.split('').reverse().join('');
    
    return regex === reversedStr;
};

checkPalindrome(sampleStr);
