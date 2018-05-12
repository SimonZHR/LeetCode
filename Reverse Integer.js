/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    /*var arr = x.toString().match(/\d/g);    //Number -> String -> Array or var arr = x.toString().split('')
    var result = "";
    if(x < 0) {
        result += "-";  //if x is negative, add '-'
    }
    arr.reverse();  //reverse the array
    for(let i=0; i<arr.length; i++) {   //remove the front 0
        if(arr[i] != 0) {
            break;
        } else {
            arr.shift();
            i--;
        }
    }
    for(let j=0; j<arr.length; j++) {   //Array -> String or result = arr.join('')
        result += arr[j]
    }
    result = Number(result);    //String -> Number
    if(result <= -0x80000000 || result > 0x7fffffff) {  //the problem requests the result is within 32bit signed number
        return 0;
    } else {
        return result;   
    }*/
    var y = x;
    var result = 0;
    while(y != 0) {
        let place = y % 10;
        result = result * 10 + place;
        y = parseInt(y/10);
    }
    if(result <= -0x80000000 || result > 0x7fffffff) {
        return 0;
    } else {
        return result;   
    }
};

/*
 *the idea is to get the remainder and times 10 in each loop, the condition of the loop is the quotient is not 0   
 *at the end, need to take care of the scope of the result   
*/