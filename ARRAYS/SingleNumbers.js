var singleNumber = function(nums) {
    let object={};
    for(let i=0;i<nums.length;i++){
        if(!object[nums[i]]){
            object[nums[i]]=1
        }
        else{
            object[nums[i]]=2            
        }
    }

    for(let j=0;j<nums.length;j++){
        if(object[nums[j]]===1){
            return nums[j]
        }
    }

};


console.log(singleNumber([4,1,2,1,2])) //4