class Solution {
    
    twoSum(nums, target) {
        const map = new Map()
        for(let i = 0 ; i < nums.length ; i++){
            const current = nums[i]
            const compliment = target - current
            if(map.has(compliment)){
                return [i , map.get(compliment)]
            }
            map.set(current , i)  
        }
    }
}
