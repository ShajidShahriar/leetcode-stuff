class Solution{
 
    
    hasDuplicates(nums){
        const seen = new Set()
        console.log(seen)
        for (const num of nums){
            if (seen.has(num)) return true 
            seen.add(num)
        }
        return false
    }
}

const mysolution = new Solution()
mysolution.hasDuplicates([1,2,2,3,4])