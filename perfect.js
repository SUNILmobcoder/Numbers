// In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.


// perfect number function

function perfect(num) {
    if(num < 6) {
        return false;
    }
    let factSum = 1;
    for(let i=2; i <= Math.floor(num/2); i++) {
        if(num % i == 0) {
            factSum += i;
        }
    }
    if(factSum == num) {
        return true;
    } else {
        return false;
    }
}

