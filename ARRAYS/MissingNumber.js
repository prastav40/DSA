var missingNumber = function(nums) {
    let sum=0;
    let n=nums.length
    let arraysum=0
    for(let i=0;i<n;i++){
       sum=(n*(n+1))/2;
       arraysum=arraysum+nums[i];
    }
    return sum-arraysum
};

console.log(missingNumber([3,0,1])) //2