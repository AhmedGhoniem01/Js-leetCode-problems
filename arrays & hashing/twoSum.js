//Return array indexes
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let tempIndexes = [];
        let temp = nums[i];
        let tempTarget = target-temp;
        tempIndexes.push(i);
        for(let x=i+1; x<nums.length; x++){
            if(nums[x] == tempTarget){
                tempIndexes.push(x);
                return tempIndexes;
            }
        }
    }
};

//Return Array values
var twoSum = function(nums, target) {
    nums.sort(function(a, b){return a-b});
    for(let i=0; i<nums.length; i++){
        let temp = nums[i];
        let tempTarget = target-temp;
        let index = nums.indexOf(tempTarget);
        if(index != -1){
            return [nums[i], nums[index]];
        }
    }
};