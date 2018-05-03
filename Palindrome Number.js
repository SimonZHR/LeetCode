/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {                     //negative numbers all return false
        return false;
    }
    let copy = x;   
    let result = 0;
    while(x) {
        result = result * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if(result == copy) {
        return true;
    } else {
        return false;
    }
};

/*
 *This idea is similiar to the reverse num one, reverse the number and compare it to the original
 *
 *
*/