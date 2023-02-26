/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function sortArrayOfStr(strs){
    let sortedArray = [];
    for(let i=0; i< strs.length; i++){
        sortedArray.push(Array.from(strs[i]).sort().toString())
    }
    return sortedArray;
}

var groupAnagrams = function(strs) {
    let sortedArray = sortArrayOfStr(strs);
    let anagrams = [];
    for(let i=0; i<sortedArray.length; i++){
        let temp = sortedArray[i];
        if(temp != -1){
            let tempAnagram = [strs[i]];
            for(let x=i+1; x<sortedArray.length; x++){
                if(sortedArray[x] == temp){
                    tempAnagram.push(strs[x])
                    sortedArray[x]=-1;
                }
            }
            anagrams.push(tempAnagram);
        }
    }
    return anagrams;
};