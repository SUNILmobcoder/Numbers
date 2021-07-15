// Palindrome : A palindromic number (also known as a numeral palindrome or a numeric palindrome) is a number (such as 16461) that remains the same when its digits are reversed.

// function for reverse the string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// function for checking palindrome

function palindrome(str) {
    const type = typeof(str);
    if(type == "number"){
        const originalStr = str.toString();
        const duplicateStr = reverseString(originalStr);
        if(originalStr === duplicateStr) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please enter a valide type"
    }
    
}
