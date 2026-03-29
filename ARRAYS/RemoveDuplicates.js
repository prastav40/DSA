//question
//Given an integer array nums sorted in non-decreasing order,
//remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Then return the number of unique elements in nums.

function removeduplicates(nums){
    let k=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[k]){
            k=k+1;
            nums[k]=nums[i]
        }
    }
   return k+1
}

console.log(removeduplicates([0,0,1,1,1,2,2,3,3,4]))//5