const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultP = document.getElementById("resultP");

const checkPalindrome = (str) => {
    // Regular expression to replace unwanted characters from string
    const regex = str.toLowerCase().replace(/[\W_]/g, "");
    const reversedStr = regex.split('').reverse().join('');
    
    return regex === reversedStr;
};

const triggerEvent = () =>{
    const isPalindrome = checkPalindrome(textInput.value.trim());
    
    if(textInput.value === ""){
        alert("Please input a value");
    } else{
        if(isPalindrome){
            resultP.textContent = `${textInput.value} is a Palindrome`;
        } else{
            resultP.textContent = `${textInput.value} is not a Palindrome`;
        }
    }
    textInput.value = '';
}

const manipulateDOM = () =>{
    triggerEvent();
}

checkBtn.addEventListener("click", manipulateDOM);
textInput.addEventListener("keyup", (e) =>{
    e.preventDefault();
    if(e.key === 'Enter') triggerEvent();
})