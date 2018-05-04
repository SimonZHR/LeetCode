/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {      //if no ele in strs, return ""
        return "";
    } else if(strs.length == 1) {   //if only one ele, the common prefix is it
        return strs[0];
    }
    let index = Math.min(strs[0].length-1, strs[1].length-1);   //index resords the possible index of cur common prefix
    for(let i=0; i<strs.length-1; i++) {        //traverse the whole strs
        if(strs[i]=="" || strs[i+1]=="") {  //once there is a empty string return ""
            return "";
        }
        let len = Math.min(strs[i].length, strs[i+1].length, index+1);  //get the shortest length
        for(let j=0; j<len; j++) {
            if(strs[i].charAt(j) != strs[i+1].charAt(j)) {
                index = j - 1;
                break;
            } else {
                index = j;
            }
        }
    }
    if(index < 0) {
        return "";
    } else {
        return strs[0].slice(0, index+1);
    }
};
