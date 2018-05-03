/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var pos = 0;
    var length = s.length;
    var result = 0;
    while(true) {   //dont know the length of the loop, use while
        let c = s.slice(pos, pos+1);    //in each loop, get one character
        let remain = s.slice(pos+1);    //the remaining string
        switch(c) {
            case "I":                               //'I' means 1, but if it is in front of the bigger value character, it is negative.
                if(remain.match(/[XCMVLD]/)) {
                    result -= 1;
                } else {
                    result += 1;
                }
                break;
            case "X":                               //'X' means 10
                if(remain.match(/[CMLD]/)) {
                    result -= 10;
                } else {
                    result += 10;
                }
                break;
            case "C":                               //'C' means 100
                if(remain.match(/[MD]/)) {
                    result -= 100;
                } else {
                    result += 100;
                }
                break;
            case "M":                               //'M' means 1000
                result += 1000;
                break;
            case "V":                               //'V' means 5
                result += 5;
                break;
            case "L":                               //'L' means 50
                result += 50;
                break;
            case "D":                               //'D' means 500
                result += 500;
                break;
        }
        pos++;
        if(pos == s.length) {                   //jump out of the loop
            break;
        }
    }
    return result;
};