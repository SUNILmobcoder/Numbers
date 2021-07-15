// Prime Number which divide by itself or 1

// function for prime number
function prime(num) {
    if (typeof(num) == "number"){
        if(num < 0) {
            return "Plese enter positive number";
        }
        for(let i=2; i<=Math.floor(num/2); i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;

    } else {
        return "Please enter number only ";
    }
}
