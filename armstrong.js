// function for checking armstrong number
function armstrongNumber(num) {
    let tempNum = num;
    let digitSum = 0;
    let digit = 0;
    let length = num.toString().length;
    while(tempNum > 0) {
        digit = tempNum % 10;
        digitSum += Math.pow(digit, length);
        tempNum = Math.floor(tempNum / 10);
    }
    if(digitSum === num ) {
        return true;
    } else {
        return false
    }
}
