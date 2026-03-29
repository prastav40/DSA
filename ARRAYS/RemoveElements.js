//Given an integer array nums and an integer val, remove all occurrences of val in-place.
// The order of the elements may be changed. 
//Then return the number of elements in nums which are not equal to val.

var removeElement = function(nums, val) {
    let k = 0; // k tracks the "writing" position

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            // Write the valid number at index k, THEN increment k
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log(removeElement([3, 2, 2, 3, 8, 9], 3)); 
// Output: [2, 2, 8, 9] and returns 4