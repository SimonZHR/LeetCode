/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []; 
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i) == "(" || s.charAt(i) == "{" || s.charAt(i) == "[") {
            stack.push(s.charAt(i));
        } else {
            switch(s.charAt(i)) {
                case "]" :
                    if(stack[stack.length-1] != "[") {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
                case "}" :
                    if(stack[stack.length-1] != "{") {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
                case ")" :
                    if(stack[stack.length-1] != "(") {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
            }
        }
    }
    if(stack.length == 0) {     //no elements means all parentheses are matched
        return true;
    } else {
        return false;
    }
};

/*
*the idea is using a stack, 
*push the left parenthesis and see whether match the coming right parenthesis,compiling 中移进归约思想
*/
