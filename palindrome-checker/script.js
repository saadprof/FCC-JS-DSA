const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultP = document.getElementById("resultP");

const checkPalindrome = (str) => {
    // Regular expression to replace unwanted characters from string
    const regex = str.toLowerCase().replace(/[\W_]/g, "");
    const reversedStr = regex.split('').reverse().join('');
    
    return regex === reversedStr;
};

const manipulateDOM = () =>{
    const isPalindrome = checkPalindrome(textInput.ariaValueMax.trim());
    console.log(isPalindrome);
}
