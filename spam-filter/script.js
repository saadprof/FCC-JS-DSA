const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

/*
//  those backward slash contains actual regular expressions.
    i is for case-insensitive search.
    | is called alternative pipe.
    [a-z] is character classes.
    [0-9] is number classes.
    + indicates single or multiple characters.
    ? refers to optional characters.
    (?:) refers to non-capturing groups.
    ^ match the first input only.
    $ match the last input only.
    \s match a single character white space.
 */
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

/*
Array.some() method take a call back function and checks if atleast one of item returns true.
regex.test() method test the match in string. returns boolean value only.
*/
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }

    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
    messageInput.value = "";
});
